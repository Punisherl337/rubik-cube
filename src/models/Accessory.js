const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required']
    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    }
});

const Accessory = mongoose.model('Accesssory', accessorySchema);

module.exports = Accessory;