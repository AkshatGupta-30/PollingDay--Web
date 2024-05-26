const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  leader: {
    type: String,
    required: true
  },
  leaderMobile: {
    type: Number,
    required: true
  },
  foundedYear: {
    type: Date,
    default: Date.now
  },
  ideology: { type: String },
  headquarter: { type: String },
  numberOfMembers: {
    type: Number,
    required: true
  },
  symbol: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Symbol',
    required: false
  },
  candidates: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Candidate',
    required: false
  },
  facebook: { type: String, unique: true },
  twitter: { type: String, unique: true },
  instagram: { type: String, unique: true }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
