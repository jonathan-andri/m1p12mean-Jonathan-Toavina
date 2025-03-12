const express = require('express') ;
const router = express.Router() ;
const Customer = require("../models/Customer") ;

//create a customer
router.post('/', async( req, res ) => {
    try {
        const customer = new Customer(req.body) ;
        await customer.save() ;
        res.status(201).json(article) ;
    }catch (error) {
        res.status(400).json({ message : error.message }) ;
    }
}) ;

//read all customers 
router.get('/', async ( req, res ) => {
    try {
        const customer = await Customer.find() ;
        res.json(customer) ;
    } catch (error) {
        res.status(400).json({ message: error.message }) ;
    }
}) ;

//update customer 
router.put('/:id', async ( req, res ) => {
    try {
        const customer = await Customer.fintByIdAndUpdate(req.params.id, req.body, { new:true }) ;
        res.json(customer) ;
    } catch (error) {
        res.status(400).json({ message: error,message }) ;
    }
}) ;

//delete customer
router.delete('/:id', async( req, res ) => {
    try {
        await Customer.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Customer Deleted "}) ;
    } catch (error) {
        res.status(400).json({ message: error.message }) ;
    }
})

module.exports = router;