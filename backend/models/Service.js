const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Routine Maintenance', 'Repair', 'Diagnostic' ],
  },
  serviceDescription: {
    type: String,
    required: true
  },
  serviceEstimatedPrice: {
    type: Number,
    required: true
  },
  serviceEstimatedDuration: {
    type: String,
    required: true, 
  }
}, {
  timestamps: true })

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
