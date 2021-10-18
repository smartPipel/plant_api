const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId
    },
    plantName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    descriptions: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    plantType: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    image: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    latinName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;