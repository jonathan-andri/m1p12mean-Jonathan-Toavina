const mongoose = require('mongoose') ;

const appointmentSchema = new mongoose.Schema({
    appoDesc: { type: String, required: true},
    appoDate: { type: String, required: true},
    appoHour: { type: String, required: true},
    appoNote: { type: String, required: true},
    appoStatus: { type: String, required: true}
}, {timesstamps: true})

module.exports = mongoose.model('Appointment', appointmentSchema);