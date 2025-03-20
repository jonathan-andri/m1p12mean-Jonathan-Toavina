const mongoose = require('mongoose') ;

const appointmentSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    mechanicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        default: null
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    appoDate: {
        type: Date,
        required: true
    },
    appoStatus: {
        type: String,
        enum: ['pending', 'accepted','inProgress', 'rejected', 'completed'],
        default: 'pending'
    },
    appoPriceEstimate: {
        type: Number,
        required: true
    },
    appoActualPrice: {
        type: Number,
        default: null
    },
    appoNotes: {
        type: String,
        defautl: null
    }

    
}, {timesstamps: true})

module.exports = mongoose.model('Appointment', appointmentSchema);