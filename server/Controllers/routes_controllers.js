const { User, Events } = require('../Model/eventoModel');
const { z } = require('zod');
const jwt = require('jsonwebtoken')

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

    const jwt_token = req.headers?.authorization;

    const valid_user = user_zod_schema.safeParse(req.body.user);
    if (!valid_user.success) {
        res.status(400).json({
            msg: "Enter the details in correct format please!"
        })
    }
    // console.log(valid_user);
    const { username, email, phone, password } = valid_user.data;

    try {

        // const jwt_verify = jwt.verify( jwt_token , process.env.JWT_SECRET)

        // if(jwt_verify.success){
        //     res.json({
        //         msg : 'Already signed in'
        //     })
        // }

        const existing_user = await User.findOne(
            {
                username: username,
                email: email,
                phone : phone,
                password : password,
            })
        console.log(existing_user);

        if (existing_user) {
            const jwt_token = jwt.sign({ username : existing_user.username, email : existing_user.email }, process.env.JWT_SECRET)
            res.json({
                jwt_token,
                msg : 'Signed in sucessfully',
                username : existing_user.username
            })

        }else{
            res.json({
                msg : 'User Not Found'
            })
        }
    } 
    catch (e) {
        return res.json({
            msg: 'Seems Like there was an error'
        })
    }
}


const addedeventsController = async (req, res)=>{

    const event_zod_schema = {
        eventname: z.string(),
        hostedby: z.string(),
        description: z.string(),
        location: z.string(),
        date: z.string().date(),
        time: z.string().time(),
        price: z.number().int(),
        category: z.string(),
        intrested: z.array(),
        byuser : z.string()
    }

    const event = event_zod_schema.safeParse(req.body.event);

    if(!event.success){
        return res.json({
            msg : "Please enter correct format"
        })
    }

    const new_event = new Events({
        
    })


    // res.json({
    //     msg : 'so you were authorized',
    //     username : req.email,
    // })
}

const eventsController = async (req,res)=>{


}



module.exports = { signupController , signinController, addedeventsController }