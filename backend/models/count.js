const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    year: Number,
    month: Number,
    appointment: Number
})

module.exports = mongoose.model('count', countSchema)