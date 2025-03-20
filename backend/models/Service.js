const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
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
    type: Number,
    required: true, 
  }
}, {
  timestamps: true })

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
