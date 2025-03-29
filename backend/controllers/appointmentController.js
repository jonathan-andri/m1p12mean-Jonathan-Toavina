const Appointment = require('../models/Appointment') ;

exports.createAppointment = async (req, res) => {
    try {
        const appo = new Appointment(req.body);
        await appo.save();
        res.status(201).json(appo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id) ;
        res.json(appointment) ;
    }
    catch (error) {
        res.status(500).json({ error: 'appointment not found' });
    }
}

exports.updateAppointment = async (req, res) => {
    try {
        const appo = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(appo);
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteAppointment = async ( req, res) => {
    console.log(req.params)
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment deleted successfully' }) ;
    }
    catch( er ) {
        res.status(500).json({ message: er.message });
    }
}

