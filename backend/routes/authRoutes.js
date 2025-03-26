const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/jwtAuth');
const { roleMiddleware } = require('../middleware/roleMiddleware');

router.post('/login' ,authController.login); 

router.get('/me', authMiddleware ,authController.getCurrentUser);

// router.get('/api/customer-data', authMiddleware, roleMiddleware('customer'));

module.exports = router;