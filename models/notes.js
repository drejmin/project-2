const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  noteName: String,
  subject: String,
  courseName: String,
  groupName: String,
  private: Boolean,
  text: String,
}, {
  timestamps: true
});


module.exports = mongoose.model('Notes', notesSchema);
