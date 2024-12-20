const { User, Events } = require('../Model/eventoModel');
const { z } = require('zod');
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2

require('dotenv').config();

const user_zod_schema = z.object({
    username: z.string(),
    email: z.string().email(),
    phone: z.string().min(10),
    password: z.string().min(8)
})
const user_zod_schema_signin = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const signupController = async (req, res) => {

    const valid_user = user_zod_schema.safeParse(req.body);
    // console.log(req.body);

    if (!valid_user.success) {
        res.status(400).json({
            msg: "Enter the details in correct format please!"
        })
    }
    // console.log(valid_user);
    const { username, email, phone, password } = valid_user.data;

    try {
        const existing_user = await User.findOne(
            {
                username: username,
                email: email,
            })
        // console.log(existing_user);

        if (existing_user) {
            return res.status(409).json({
                msg: 'User Already Exists'
            })
        }
    } catch (e) {
        return res.status(404).json({
            msg: 'Seems Like there was an error'
        })
    }

    try {
        const create_user = new User(
            {
                username: username,
                email: email,
                phone: phone,
                password: password
            }
        )

        const user_status = await create_user.save();

        if (user_status) {
            res.status(200).json({
                msg: 'User Created Sucessfully Try to Signin',
                username: user_status.username
            })
        }
    } catch (e) {
        res.status(500).json({
            msg: 'Seems Like there was error while creating'
        })
    }
}

const signinController = async (req, res) => {

    const valid_user = user_zod_schema_signin.safeParse(req.body);

    if (!valid_user.success) {
        res.status(400).json({
            msg: "Enter the details in correct format please!"
        })
    }
    // console.log(valid_user);
    const { email, password } = valid_user.data;

    try {

        const existing_user = await User.findOne(
            {
                email: email,
                password: password,
            })
        // console.log(existing_user);

        if (existing_user) {
            const jwt_token = jwt.sign({ email: existing_user.email }, process.env.JWT_SECRET)

            // console.log("----------------");
            // console.log(jwt_token);
            // console.log("-----------------");

            res.status(200).json({
                jwt_token,
                msg: 'Signed in sucessfully',
                username: existing_user.username,
            })

        } else {
            res.status(404).json({
                msg: 'User Not Found'
            })
        }
    }
    catch (e) {
        return res.status(404).json({
            msg: 'Seems Like there was an error'
        })
    }
}

const addedeventsController = async (req, res) => {

    // console.log(req.email);

    if (!req.file) {
        return res.status(400).send('No file uploaded or file type is not an image.');
    }

    const event_zod_schema = z.object({
        eventname: z.string(),
        hostedby: z.string(),
        description: z.string(),
        location: z.string(),
        date: z.string().date(),
        time: z.string(),
        // price: z.number(),
        category: z.string(),
        // eventimage : z.object(),
        // intrested: z.array(),
    })

    const event_body = req.body
    const event_zod = event_zod_schema.safeParse(event_body);


    const cloudinary_upload = cloudinary.uploader.upload(req.file.path)
    const cloudinary_result = await cloudinary_upload;
    const image_url = cloudinary_result.url
    // console.log(cloudinary_result.url);

    if (!event_zod.success) {
        return res.status(400).json({
            msg: "Please enter correct format"
        })
    }

    const { eventname, hostedby, description, location,
        date, time, price, category, intrested } = event_body

    const new_event = new Events({
        eventname: eventname,
        hostedby: hostedby,
        description: description,
        location: location,
        date: date,
        time: time,
        price: price,
        category: category,
        eventimage: image_url,
        intrested: intrested,
        byuser: req.email
    })

    const saved_event = await new_event.save();

    const user = await User.findOne({ email: req.email });
    
    // console.log(user);

    user.addedevents.push(saved_event._id);

    await user.save();

    if (saved_event) {
        res.status(200).json({
            msg: "Your Event is Saved Succesfully!!"
        })
    }
}

const geteventsController = async (req, res) => {

    const getevents = await Events.find();

    if (getevents) {
        res.json({
            getevents
        })
    } else {
        res.json({
            msg: "Seems Like There are no events for now"
        })
    }
}

const geteventIdController = async (req, res) => {

    const getevent = await Events.findById(req.params.id);

    if (getevent) {
        res.json({
            getevent
        })
    } else {
        res.json({
            msg: "Seems Like There are no events for now"
        })
    }
}

const getusereventsController = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.email }).populate('addedevents');

        res.status(200).json({
            user
        })

    } catch (error) {
        res.status(404).json({
            msg: "User Not Found to get events"
        })
    }
}

const editeventController = async (req, res, next) => {

    const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (updatedEvent) {
        res.json({msg : 'Event Updated Sucessfully'});
    } else {
        res.json({msg : 'Seems like there was an error while updating'})
    }
}

const deleteeventController = async (req, res) => {

    const deleted = await Events.findByIdAndDelete(req.params.id);
    const deletefromuser = await User.findOne({email : req.email});
    // console.log(deletefromuser.addedevents);

    const updatedUserEvents = deletefromuser.addedevents.filter((item)=>{
        return item != req.params.id
    }) 

    const updatedUser = await User.findByIdAndUpdate(
        deletefromuser._id,
        { $set: { addedevents: updatedUserEvents } },  // Use $set to update only addedevents
        { new: true }  // This option returns the updated document
      );

      await updatedUser.save();

    if (deleted) {
        res.json({
            msg: "Event Deleted Successfully!!"
        })
    }
    else {
        res.json({
            msg: "seems like there was an error while deleting!!"
        })
    }
}

module.exports = {
    signupController,
    signinController,
    addedeventsController,
    geteventsController,
    geteventIdController,
    getusereventsController,
    editeventController,
    deleteeventController
}