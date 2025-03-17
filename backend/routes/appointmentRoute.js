const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

// GET /appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /appointments/:id
router.get('/:id', async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appo = Appointment.findById(appointmentId);
        res.json(appo);
    } catch (error) {
        // Handle the error
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /appointments
router.post('/', async (req, res) => {
    try {
        const appo = new Appointment(req.body);
        await Customer.save();
        res.status(201).json(appo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appo = await Appointment.findByIdAndUpdate(appointmentId, req.body, { new: true });
        res.json(appo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const appointmentId = req.params.id;
        await Appointment.findByIdAndDelete(appointmentId);
        res.json({ message: "Appointment Deleted "}) ;
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;