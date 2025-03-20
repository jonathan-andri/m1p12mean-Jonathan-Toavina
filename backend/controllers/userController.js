const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body) ;
        await user.save() ;
        res.status(201).json(user) ;
    } catch (error) {
        res.status(400).json({ message: error.message}) ;
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find() ;
        res.json(user) ;
    } catch (er) {
        res.status(500).json({ message: er.message }) ;
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: 'user not found'});
        res.json(user);
    } catch(er) {
        res.status(500).json({ message: er.message}) ;
    }
}

exports.updateUser = async (res, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}) ;
        res.json(user) ;
    } catch (er) {
        res.status(400).json({ message: er.message }) ;
    }
}

exports.deleteUser = async ( req, res ) => {
    try {
        await User.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Utilisateur supprime" }) ;
    } catch (er) {
        res.status(500).json({ message: er.message}) ;
    }
}