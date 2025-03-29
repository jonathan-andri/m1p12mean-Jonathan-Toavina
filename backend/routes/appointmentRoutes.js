const express = require('express');
const appointmentController = require('../controllers/appointmentController') ; 
const router = express.Router();
const countStatsMiddleware = require('../middleware/countMiddleware')
const mechanicAppointmentsControler = require('../middleware/mechanicAppointment')

// POST /appointments
router.post('/', appointmentController.createAppointment);

// GET /appointments
router.get('/', countStatsMiddleware, appointmentController.getAllAppointments);

router.get('/mechanic', mechanicAppointmentsControler.getMechanicAppointments)

// GET /appointments/:id
router.get('/:id', appointmentController.getAppointment);

router.put('/:id', appointmentController.updateAppointment);

router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;