const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  memberName: String,
  ownerName: String,

}, {
  timestamps: true
});


module.exports = mongoose.model('Notes', groupSchema);
