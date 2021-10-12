const mongoose = require('mongoose');

function initDatabse(connectionString) {
    return mongoose.connect(connectionString);
}

module.exports = initDatabse;