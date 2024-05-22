const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true
  },
  mothersName: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true
  },
  familyMembers: {
    type: Number,
    required: true
  },
  maritialStatus: {
    type: Boolean,
    required: false
  },
  profession: {
    type: String,
    required: true
  },
  criminalRecord: {
    type: [String],
    required: false
  },
  languagesKnows: {
    type: [String],
    required: false
  },
  partyMembership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Party',
    required: false
  },
  visionAndGoals: {
    type: String,
    required: false
  },
  facebook: { type: String, unique: true },
  twitter: { type: String, unique: true },
  instagram: { type: String, unique: true },
  photograph: {
    type: String,
    required: true
  },
  signature: {
    type: String,
    required: true
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
