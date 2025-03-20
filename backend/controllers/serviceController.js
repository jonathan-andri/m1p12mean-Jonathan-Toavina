const Service = require('../models/Service');


exports.createService = async (req, res) => {
    try {
        const service = new Service(req.body) ;
        res.status(201).json(service) ;
    } catch (error) {
        res.status(400).json({ message: error.message }) ;
    }
}

exports.getAllServices = async (req, res) => {
    try {
        const service = await Service.find() ;
        res.json(service) ;
    } catch {
        res.status(400).json({ message: error.message }) ;
    }
}

exports.getServiceById = async (req, res ) => {
    try {
        const service = await Service.findById(req.params.id) ;
        res.json(service) ;
    }
    catch (er) {
        res.status(500).json({ message: er.message }) ;
    }
}

exports.updateService = async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new:true });
        res.json(service) ;
    } catch (error) {
        res.status(400).json({ messageL: error.message }) ;
    }
} 

exports.deleteService = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Service deleted"}) ;
    } catch (error) {
        res.status(400).json({ message: error.message}) ;
    }
}