const mongoose = require('mongoose');
const {SchemaType} = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
            login: {type: String, min: 2, max: 50},
            password: {type: String, min: 8, max: 50},
            address: {type: String, min: 2, max: 50},
            phone: {type: String, min: 2, max: 50},
            email: {type: String, min: 2, max: 50},
            robots: [{type: Schema.Types.ObjectId, ref:'Robot'}],
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;