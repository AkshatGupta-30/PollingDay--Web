const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  leaderName: {
    type: String,
    required: true
  },
  foundedYear: {
    type: Date,
    default: Date.now
  },
  ideology: { type: String },
  symbol: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Symbol',
    required: false
  },
  numberOfMembers: {
    type: Number,
    required: true
  },
  candidates: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Candidate',
    required: true
  },
  facebook: { type: String, unique: true },
  twitter: { type: String, unique: true },
  instagram: { type: String, unique: true }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
