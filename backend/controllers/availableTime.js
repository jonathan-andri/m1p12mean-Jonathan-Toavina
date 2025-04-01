const Service = require('../models/Service')

async function findNextAvailableSlot(mechanicData, serviceDuration) {
    const now = new Date();
  
  
    for (let i = 0; i < mechanicData.appointments.length; i++) {
      const currentAppointment = mechanicData.appointments[i];
      const nextAppointment = mechanicData.appointments[i + 1];
      let currentServiceDuration = await Service.findById(currentAppointment.serviceId.toString())
      currentServiceDuration = new Date (currentServiceDuration.serviceEstimatedDuration)
      //console.log(currentServiceDuration.getUTCMinutes())
      const minutes = currentServiceDuration.getUTCMinutes();
      const hours = currentServiceDuration.getUTCHours();
      currentServiceDuration = minutes * 60 * 1000 + hours * 60 * 60 * 1000;  

      const currentEnd = new Date(currentAppointment.appoDate.getTime() + 
                                  currentServiceDuration);
  
      const availableStart = nextAppointment
        ? new Date(nextAppointment.appoDate.getTime() - serviceDuration)
        : new Date(currentEnd.getTime());
  
      if ((nextAppointment ? nextAppointment.appoDate.getTime() - currentEnd.getTime() : Infinity) >= serviceDuration) {
        return { mechanic: mechanicData.mechanic, availableFrom: currentEnd };
      }
    }
  
    return null;
  }

module.exports = { findNextAvailableSlot };