const express = require('express')
const { signupController, signinController, addedeventsController, geteventsController } = require('../Controllers/routes_controllers');
const { user_auth } = require('../Middlewares/auth');
require('dotenv').config()

const cloudinary = require('cloudinary').v2
const multer = require('multer')

const router = express.Router();

// ------------------------- Routes -------------------------------
router.post('/signup', signupController);

router.post('/signin', signinController);

// -------------------------------- File upload multer -------------------------
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET_KEY
})

const upload = multer( { dest : './uploads/' })

router.post('/user/addevent', user_auth , upload.single('eventimage') , addedeventsController);
// --------------------------------------------------------------------------------

router.get('/events', geteventsController)

router.get('/events/:_id', )


module.exports = { router }