// hook mongoose into the model
// import * as mongoose from 'mongoose';

var mongoose = require('mongoose');

// save the mongoose.Schema class/contructor object as Schema
const Schema = mongoose.Schema;
// instantiate Freelancer object with the structure of data and its rules
const FreelancerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    field: {
        type: String,
        trim: true,
        required: true
    },
    experience: {
        type: Number,
        trim: true,
        required: true
    }
});

// create the 'Freelancer' model with our Schema class/contructor
module.exports = mongoose.model("Freelancer", FreelancerSchema); 