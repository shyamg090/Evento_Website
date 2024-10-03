const express = require('express')
const { signupController, signinController, addedeventsController } = require('../Controllers/routes_controllers');
const { user_auth } = require('../Middlewares/auth');

const router = express.Router();


router.post('/signup', signupController);

router.post('/signin', signinController);

router.get('/events', )
router.get('/events/:_id', )

router.post('/user/addevent', user_auth , addedeventsController);

module.exports = { router }