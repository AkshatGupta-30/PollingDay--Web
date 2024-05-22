const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
    type: String,
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
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;
