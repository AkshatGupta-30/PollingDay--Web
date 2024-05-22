const mongoose = require('mongoose');

const symbolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  html: {
    classic: {type: String, required: true},
    sharp: {type: String, required: true}
  },
  fontAwesomeIcons: {
    classic: {type: String, required: true},
    sharp: {type: String, required: true}
  },
});

const Symbol = mongoose.model('Symbol', symbolSchema);
module.exports = Symbol;
