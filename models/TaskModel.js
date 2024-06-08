const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    taskId: { type: String, required: true, unique: true },
    companyId: { type: String, required: true },
    companyName: { type: String, required: true },
    taskReq: { type: String, required: true },
    desc: { type: String, required: true },
    domain: { type: String, required: true },
    skill: { type: String, required: true },
    incentive: { type: Number, required: true },
    helpLinks: { type: String },
    nice: { type: String },
    endDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);