const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  appointmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment', 
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'credit_card', 'PayPal'],
    default: 'cash'
  },
  paymentStatus: {
    type: String,
    enum: ['waiting for payment', 'paid'],
    default: 'waiting for payment'
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
