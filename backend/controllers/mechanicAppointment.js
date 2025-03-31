exports.getMechanicAppointments = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: 'Unauthorized - No user information' });
        }

        const appointments = await Appointment.find({
            mechanicId: req.user._id,
            appoStatus: 'Confirmed'
        });
        
        res.status(200).json(appointments);
    } catch (err) {
        console.error('Error fetching mechanic appointments:', err);
        res.status(500).json({ 
            message: 'Failed to fetch appointments',
            error: err.message // Send only the error message for security
        });
    }
}