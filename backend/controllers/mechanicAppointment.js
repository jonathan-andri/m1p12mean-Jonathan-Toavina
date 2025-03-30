const Appointment = require('../models/Appointment');

exports.getMechanicAppointments = async (req, res) =>{
    if (req.user.role == 'mechanic')
        try{
            const appointments = await Appointment.find({
                mechanicId: req.user._id,
                appoStatus: 'Confirmed'
            });
            res.status(200).json(appointments);
        } catch (err){
            res.status(500).json({message: 'Error vaovao'})
        }
    else{
        return res.status(403).json({ message: 'Acces denied'})
    }
}