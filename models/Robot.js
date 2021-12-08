const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const robotSchema = new Schema(
    {
        robot_name: {type: String, min: 2, max: 10, required: true},
        status:{type: String, enum:["active", "inactive"], default: "active"},
        user: {type: Schema.Types.ObjectId, ref:'User', required: true},
    },
    { timestamps: true }
);

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;