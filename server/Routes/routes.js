const express = require('express')
const { signupController, signinController, addedeventsController, geteventsController, geteventIdController, deleteeventController, editeventController, getusereventsController } = require('../Controllers/routes_controllers');
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

router.get('/events/:id', geteventIdController)

router.get('/users/events', user_auth , getusereventsController);

router.put('/events/:id', user_auth , upload.single('eventimage') , editeventController);

router.delete('/events/:id', user_auth, deleteeventController);

module.exports = { router }