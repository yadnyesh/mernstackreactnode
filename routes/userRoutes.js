const express = require('express');
const router = express.Router();
const {sayHi} = require('../controllers/userController');
const {signup} = require('../controllers/userController');

router.get('/', sayHi);

router.post('/signup', signup);

module.exports = router;