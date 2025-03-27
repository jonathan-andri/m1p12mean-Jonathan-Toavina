const Car = require('../models/Car') ;
const mongoose = require('mongoose') ;


exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    }
    catch (er) {
        res.status(500).json({ message: er.message }) ;
    }
}

exports.getCarByCustomerId = async (req, res) => {
    const {customerId}  = req.params; 
    try {
        // Get customerId from query params
        if (!customerId) {
          return res.status(400).json({ message: 'Customer ID is required' });
        }

        if(!mongoose.Types.ObjectId.isValid(customerId)) {
            return res.status(400).json({ message: 'Invalid Customer ID' }) ;
        }

        const cars = await Car.find({  customerId: new mongoose.Types.ObjectId(customerId) }); // Filter cars by customerId
        res.json(cars);
        // console.log(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ message: 'Server error' });
      }
}

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id) ;
        if (!car) return res.status(404).json({ message: 'Car not found' });
        res.json(car) ;
    }
    catch(er) {
        res.status(500).json({ message: er.message}) ;
    }
}

exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true}) ;
        res.json(car) ;
    } catch (er) {
        res.status(400).json({ message: er.message }) ;
    }
}

exports.deleteCar = async ( req, res ) => {
    try {
        await Car.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Utilisateur supprime" }) ;
    } catch (er) {
        res.status(500).json({ message: er.message}) ;
    }
}