'use strict';
const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String }
})

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;