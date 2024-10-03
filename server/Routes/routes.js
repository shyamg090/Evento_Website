const express = require('express')
const { signupController, signinController, addedeventsController } = require('../Controllers/routes_controllers');
const { user_auth } = require('../Middlewares/auth');

const multer = require('multer')

const router = express.Router();

// ------------------------- Routes -------------------------------
router.post('/signup', signupController);

router.post('/signin', signinController);

router.get('/events', )

router.get('/events/:_id', )
// -------------------------------- File upload multer -------------------------
const upload = multer( { dest : './uploads/' })

router.post('/user/addevent', user_auth , upload.single('eventimage') , addedeventsController);

module.exports = { router }