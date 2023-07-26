const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema = new Schema({
  subject: String,
  courseName: String,
  teacherName: String,
  private: Boolean,
}, {
  timestamps: true
});


module.exports = mongoose.model('Notes', classesSchema);
