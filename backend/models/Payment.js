const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment', // Reference to the 'Appointment' collection
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the 'User' collection (Client)
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'credit_card', 'PayPal'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending' // Default status is 'pending'
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
