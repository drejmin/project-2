const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const groupSchema = new Schema({
//   memberName: String,
//   ownerName: String,
//   groupName:String,

// }, {
//   timestamps: true
// });


// module.exports = mongoose.model('Group', groupSchema);

// const classSchema = new Schema({
//   subject: {type:String, required: true},
//   courseName: String,
//   teacherName: String,
//   private: Boolean,
// }, {
//   timestamps: true
// });


// module.exports = mongoose.model('Class', classSchema);

const noteSchema = new Schema({
  noteName: {
    type:String,
     required: true
    },
  courseName: String,
  groupName: String,
  subject: {
    type:String,
     required: true
    },
  text: String,
  private: {type:Boolean,default: false},
}, {
  timestamps: true
});

const Note = mongoose.model('note', noteSchema);
var note = new Note({
  courseName:'',
  groupName:'',
  text:'',});

  if (note.noteName && note.subject) {
    note.save()
      .then(() => console.log('Note saved successfully'))
      .catch(error => console.error(error));
  } else {
    console.error('Name and subject are required');
  };



module.exports = mongoose.model('Note', noteSchema);
