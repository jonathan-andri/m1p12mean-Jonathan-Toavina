const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  title: { type: String, required: true }, 
  message: { type: String, required: true }, 
  type: { type: String, enum: ['appointment', 'reminder', 'system'], required: true }, 
  isRead: { type: Boolean, default: false }, 
  createdAt: { type: Date, default: Date.now }, 
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: false }, // Related appointment (if applicable)
});

module.exports = mongoose.model('Notification', NotificationSchema);