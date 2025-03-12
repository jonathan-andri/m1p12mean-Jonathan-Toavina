const express = require('express') ;
const router = express.Router() ;
const User = require('../models/User') ;

//creer utilisateur
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body) ;
        await user.save() ;
        res.status(201).json(user) ;
    } catch (error) {
        res.status(400).json({ message: error.message}) ;
    }
}) ;

//lire utilisateur 
router.get('/', async (req, res) => {
    try {
        const user = await User.find() ;
        res.json(user) ;
    } catch (er) {
        res.status(500).json({ message: er.message }) ;
    }
}) ;


//modifier utilisateur 
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}) ;
        res.json(user) ;
    } catch (er) {
        res.status(400).json({ message: er.message }) ;
    }
}) ;

//supprimer utilisateur
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id) ;
        res.json({ message: "Utilisateur supprime" }) ;
    } catch (er) {
        res.status(500).json({ message: er.message}) ;
    }
})

module.exports = router;