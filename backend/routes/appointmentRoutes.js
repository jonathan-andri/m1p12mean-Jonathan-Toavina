const express = require('express');
const appointmentController = require('../controllers/appointmentController') ; 
const router = express.Router();
const countStatsController = require('../controllers/statsController')
const mechanicAppointmentsControler = require('../controllers/mechanicAppointment')

// POST /appointments
router.post('/', appointmentController.createAppointment);

// GET /appointments
router.get('/', appointmentController.getAllAppointments);

router.get('/mechanic', mechanicAppointmentsControler.getMechanicAppointments)

router.get('/stats', countStatsController)

// GET /appointments/:id
router.get('/:id', appointmentController.getAppointment);

router.put('/:id', appointmentController.updateAppointment);

router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;