const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema(
    {
        robot: {type: Schema.Types.ObjectId, ref:"Robot",  required: true},
        sessions_number: {type: String,required: true},
        voltage_at_start: {type: Number},
        extraction_number :{},
        start_time: {type: Date},
        end_time: {type: Date},
        map: {}
    },
    { timestamps: true }
);

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;