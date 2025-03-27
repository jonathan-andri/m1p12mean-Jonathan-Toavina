const Count = require('../models/count');

exports.createCount = async (req, res) => {
    try{
        const count = new Count(req.body);
        await count.save();
        res.status(201).json(count)
    } catch (error){
        res.status(400).json({ message: error.message });
    }
};

exports.getCount = async (req, res) => {
    try {
        const count = await Count.find();
        res.json(count);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.getById = async (req, res) =>{
    try {
        const count = await Count.findById(req.params.id);
        res.json(count);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateCount = async (req, res) => {
    try {
        const count = await Count.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(count);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteCount = async (req, res) => {
    try {
        await Count.findByIdAndDelete(req.params.id);
        res.json({ message: 'Count deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}