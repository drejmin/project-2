const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const groupSchema = new Schema({
  memberName: String,
  ownerName: String,
  groupName:String,

}, {
  timestamps: true
});


module.exports = mongoose.model('Group', groupSchema);

const classSchema = new Schema({
  subject: {type:String, required: true},
  courseName: String,
  teacherName: String,
  private: Boolean,
}, {
  timestamps: true
});


module.exports = mongoose.model('Class', classSchema);

const noteSchema = new Schema({
  noteName: {type:String, required: true},
  subject: {type:String, required: true},
  course: [classSchema],
  group: [groupSchema],
  private: {type:Boolean,default: true},
  text: String,
}, {
  timestamps: true
});


module.exports = mongoose.model('Note', noteSchema);

