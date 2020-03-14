const express = require('express');
const router = express.Router();
const {sayHi} = require('../controllers/userController');
const {signup} = require('../controllers/userController');
const {userSignupValidator} = require("../validator/index")

router.get('/', sayHi);

router.post('/signup', userSignupValidator, signup);

module.exports = router;