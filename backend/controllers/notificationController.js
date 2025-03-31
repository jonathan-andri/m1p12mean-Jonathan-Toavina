const Notification = require('../models/Notification');

// ✅ Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { userId, title, message, type, appointmentId } = req.body;
    
    const notification = new Notification({
      userId,
      title,
      message,
      type,
      appointmentId
    });

    await notification.save();
    res.status(201).json({ success: true, message: "Notification created successfully", notification });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating notification", error });
  }
};

// ✅ Get all notifications for a user
exports.getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, notifications });
    console.log('from controller', notifications)
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching notifications", error });
  }
};

// ✅ Mark a notification as read
exports.markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ success: false, message: "Notification not found" });
    }

    res.status(200).json({ success: true, message: "Notification marked as read", notification });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating notification", error });
  }
};

// ✅ Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notification = await Notification.findByIdAndDelete(notificationId);

    if (!notification) {
      return res.status(404).json({ success: false, message: "Notification not found" });
    }

    res.status(200).json({ success: true, message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting notification", error });
  }
};
