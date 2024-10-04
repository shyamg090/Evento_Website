const { User, Events } = require('../Model/eventoModel');
const { z } = require('zod');
const jwt = require('jsonwebtoken')
const cloudinary = require('cloudinary').v2

require('dotenv').config();

const user_zod_schema = z.object({
    username: z.string(),
    email: z.string().email(),
    phone: z.number().min(10),
    password: z.string().min(8)
})

const signupController = async (req, res) => {
    // console.log(req.body);

    const valid_user = user_zod_schema.safeParse(req.body.user);
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
            return res.json({
                msg: 'User Already Exists'
            })
        }
    } catch (e) {
        return res.json({
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
            res.json({
                msg: 'User Created Sucessfully Try to Signin',
                username: user_status.username
            })
        }
    } catch (e) {
        res.json({
            msg: 'Seems Like there was error while creating'
        })
    }
}

const signinController = async (req, res) => {
    // console.log(req.body);

    // const jwt_token = req.headers.authorization;

    const valid_user = user_zod_schema.safeParse(req.body.user);
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
                phone: phone,
                password: password,
            })
        console.log(existing_user);

        if (existing_user) {
            const jwt_token = jwt.sign({ username: existing_user.username, email: existing_user.email }, process.env.JWT_SECRET)
            
            res.json({
                jwt_token,
                msg: 'Signed in sucessfully',
                username: existing_user.username
            })

        } else {
            res.json({
                msg: 'User Not Found'
            })
        }
    }
    catch (e) {
        return res.json({
            msg: 'Seems Like there was an error'
        })
    }
}

const addedeventsController = async (req, res) => {

    if (!req.file) {
        return res.status(400).send('No file uploaded or file type is not an image.');
    }

    const event_zod_schema = z.object({
        eventname: z.string(),
        hostedby: z.string(),
        description: z.string(),
        location: z.string(),
        date: z.string().date(),
        time: z.string().time(),
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
        return res.json({
            msg: "Please enter correct format"
        })
    }

    const { eventname, hostedby, description, location,
        date, time, price, category , intrested } = event_body

    const new_event = new Events({
        eventname: eventname,
        hostedby: hostedby,
        description: description,
        location: location,
        date: date,
        time: time,
        price: price,
        category: category,
        eventimage : image_url,
        intrested:intrested,
        byuser: req.email
    })
    
    const saved_event = await new_event.save();

    if(saved_event){
        res.json({
            msg : "Your Event is Saved Succesfully!!"
        })
    }
}

const eventsController = async (req, res) => {


}



module.exports = { signupController, signinController, addedeventsController }