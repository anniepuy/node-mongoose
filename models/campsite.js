const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema 
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//model for the schema 
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
