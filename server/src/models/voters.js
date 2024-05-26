const mongoose = require("mongoose")

const voterSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    fathersName: { type: String, required: true },
    dob: { type: Date, required: true, trim: true },
    gender: { type: String, enum: ["Male", "Female", "Others"], required: true },
    address: { type: String },
    mobile: { type: String, required: true, unique: true },
    aadhar: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVoted: { type: Boolean, default: false },
    role: { type: String, enum: ["Admin", "Voter"], default: "Voter" },
})

const Voter = mongoose.model("Voter", voterSchema)
module.exports = Voter