const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required'],
        maxlength: 125
    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;