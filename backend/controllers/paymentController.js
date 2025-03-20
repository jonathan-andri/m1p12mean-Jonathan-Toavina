const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
    try {
        const payment = new Payment(req.body) ;
        await payment.save() ;
        res.status(201).json(payment) ;
    }
    catch (error) {
        res.status(400).json({ message: error.message}) ;
    }
}

exports.getPayments = async (req, res) => {
    try {
        const payment = await Payment.find() ;
        res.json(payment) ;
    } catch (er) {
        res.status(500).json({ message: er.message }) ;
    }
}

exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if(!payment) return res.status(404).json({message: 'payment not found'});
        res.json(payment);
    } catch(er) {
        res.status(500).json({ message: er.message}) ;
    }
}

exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {new:true}) ;
        res.json(payment) ;
    } catch (er) {
        res.status(400).json({ message: er.message }) ;
    }
}

exports.deletePayment = async ( req, res ) => {
    try {
        await Payment.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Utilisateur supprime" }) ;
    } catch (er) {
        res.status(500).json({ message: er.message}) ;
    }
}