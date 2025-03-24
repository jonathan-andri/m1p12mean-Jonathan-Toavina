const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { jwtAuth } = require('../middleware/jwtAuth');

router.post('/login', authController.login); 

router.get('/:id', authController.getCurrentUser);

module.exports = router;