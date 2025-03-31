const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// ✅ Create a notification
router.post('/', notificationController.createNotification);

// ✅ Get all notifications for a user
router.get('/:userId', notificationController.getUserNotifications);

// ✅ Mark a notification as read
router.put('/:notificationId/read', notificationController.markAsRead);

// ✅ Delete a notification
router.delete('/:notificationId', notificationController.deleteNotification);

router.get('/:userId/unread-count', notificationController.getUnreadCount)
module.exports = router;
