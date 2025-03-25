const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const jwtAuth  = require('../middleware/jwtAuth');
const { roleMiddleware } = require('../middleware/roleMiddleware');

router.post('/login' ,authController.login); 

router.get('/me', jwtAuth.authMiddleware ,authController.getCurrentUser);

router.get('/api/customer-data', jwtAuth.authMiddleware, roleMiddleware('customer'));

module.exports = router;