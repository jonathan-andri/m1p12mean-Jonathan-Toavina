const express = require('express');
const appointmentController = require('../controllers/appointmentController') ; 
const router = express.Router();

// POST /appointments
router.post('/', appointmentController.createAppointment);

// GET /appointments
router.get('/', appointmentController.getAllAppointments);

// GET /appointments/:id
router.get('/:id', appointmentController.getAppointment);



router.put('/:id', appointmentController.updateAppointment);

router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;