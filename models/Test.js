const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema(
    {
        login: {type: String, min: 2, max: 50},
        password: {type: String, min: 8, max: 50},

    },
    { timestamps: true }
);

const Test = mongoose.model('Test', testSchema);

module.exports = Test;