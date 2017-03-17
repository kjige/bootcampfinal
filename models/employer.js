// hook mongoose into the model 
import * as mongoose from 'mongoose';

// save the mongoose.Schema class/constructor object as Schema
const Schema = mongoose.Schema;
// instantiate Employer object with the structure of data and its rules
const EmployerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    company: {
        type: String,
        trim: true,
        required: true
    },
    field_needed: {
        type: String,
        trim: true,
        required: true
    },
    image: {

    },
    description: {
        type: String,
        trim: true,
        required: true
    } 
});

// create the 'Employer' model with our Schema class/constructor
module.exports = mongoose.model("Employer", EmployerSchema);