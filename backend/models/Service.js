const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
     description: { type: String, required: true},
     status: { type: String, required: true}
}, {timestamps: true}) ;

module.exports = mongoose.model('Service', ServiceSchema) ;