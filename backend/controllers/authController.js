const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'user doesnt exist '});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'uncorrect password' });
        
        const token = jwt.sign(
            { userId: user._id, role: user.role},
            process.env.JWT_SECRET,
            { expiresIn: '2h'}
        );

        res.status(200).json({ token, role: user.role });
    
    } catch( er ) {
        res.status(500).json({ message: er.message });
    }
}

exports.getCurrentUser = async ( req, res ) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        res.json(user);
    } catch ( er ) {
        res.status(500).json({ message: er.message }) ;
    }
}