const Appointment = require('../models/Appointment') ;
const Mechanic = require('../models/User')
const Service = require('../models/Service')
const { findNextAvailableSlot } = require('../controllers/availableTime')

exports.createAppointment = async (req, res) => {
    const { appoDate, serviceId, customerId, carId, appoPriceEstimate } = req.body

    try{
        const mechanics = await Mechanic.find({ role: 'mechanic' })
        const service = await Service.findById(serviceId)
        
        if( !service ){
            return res.status(404).json({ message: 'Services not found' })
        }     

        if( mechanics.length === 0 ){
            return res.status(404).json({ message: 'No mechanics found' })
        }

        let startTime = new Date(appoDate);
    
        const minutes = service.serviceEstimatedDuration.getUTCMinutes();
        const hours = service.serviceEstimatedDuration.getUTCHours();
        const serviceDuration =  minutes * 60 * 1000 + hours * 60 * 60 * 1000;
        let endTime = new Date(startTime.getTime() + serviceDuration)

        
        let availableMechanic = null;
        for (const mechanic of mechanics){
            const isBusy = await Appointment.exists({
                mechanicId: mechanic._id,
                appoDate:{
                    $gte: startTime,
                    $lt: endTime
                },
            })

            if(!isBusy){
                availableMechanic = mechanic
                break;
            }    
        }

        if(availableMechanic){
            const now = new Date()
            const mechanicAvailability = await Promise.all(
                mechanics.map(async (mechanic) => {
                  const appointments = await Appointment.find({
                    mechanicId: mechanic._id,
                    appoStatus: { $nin: ["Rejected", "Done"] },
                    appoDate: { $gte: now }
                  }).sort({ appoDate: 1 });
          
                  return { mechanic, appointments };
                }));

            let availableFrom = null;
            const availableSlots = [];    

            for (const mechanicData of mechanicAvailability) {
                const nextSlot = await findNextAvailableSlot(mechanicData, serviceDuration);
                console.log(nextSlot)
                /* if (nextSlot) {
                    availableMechanic = nextSlot.mechanic;
                    availableFrom = nextSlot.availableFrom;
                    return res.status(200).json({
                        success: true,
                        message: 'Time slot',
                        availability: availableFrom
                    })
                } */

                if (nextSlot){
                    availableSlots.push({
                        nextAvailableSlot: nextSlot.availableFrom
                    });
                } 
            }  

            if (availableSlots.length > 0){
                availableSlots.sort((a, b) => 
                    new Date(a.nextAvailableSlot) - new Date(b.nextAvailableSlot)
                );
                
                return res.status(200).json({
                    timeSlot: availableSlots,
                })
            } 
            else {
                return res.status(404).json({
                    message: 'No mechanics available'
                });
            }
        }
        
        const appo = new Appointment({
            customerId,
            carId,
            serviceId,
            mechanicId: availableMechanic._id,
            appoDate: startTime,
            appoStatus: "Confirmed",
            appoPriceEstimate
          });
        
       /*  await appo.save();
        res.status(201).json(appo); */
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
   
   /*  try {
        const appo = new Appointment(req.body);
        await appo.save();
        res.status(201).json(appo);
    } catch (error) {
        res.status(400).json({ message: error.message });
        } */

    
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

