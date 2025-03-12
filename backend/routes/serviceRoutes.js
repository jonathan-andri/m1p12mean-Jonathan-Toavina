const express = require('express') ;
const router = express.Router() ;
const Service = require("../models/Service") ;

//create service 
router.post('/', async( req, res ) => {
    try {
        const service = new Service(req.body) ;
        res.status(201).json(service) ;
    } catch (error) {
        res.status(400).json({ message: error.message }) ;
    }
}) ;

//read all service
router.get('/', async ( req, res ) => {
    try {
        const service = await Service.find() ;
        res.json(service) ;
    } catch {
        res.status(400).json({ message: error.message }) ;
    }
}) ;

//update service
router.put('/:id', async (req, res ) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new:true });
        res.json(service) ;
    } catch (error) {
        res.status(400).json({ messageL: error.message }) ;
    }
}) ;

//delete service 
router.delete('/:id', async (req, res ) => {
    try {
        await Service.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Service deleted"}) ;
    } catch (error) {
        res.status(400).json({ message: error.message}) ;
    }
}) ;

module.exports = router;