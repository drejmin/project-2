const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  noteName: {
    type:String,
    // required: true
    },
  course: [{
    type: Schema.Types.ObjectId,
    ref: 'Class',}],
  group: [{
    type: Schema.Types.ObjectId,
    ref: 'Group',}],
  subject: {
    type:String,
    // required: true
    },
  text: {type:String,
        image:Buffer,
  },
 private: Boolean,
    //default: false}
  
}, {
  timestamps: true
});


const imageSchema = new mongoose.Schema({
  name: String,
	desc: String,
	img:
	{
    data: Buffer,
		contentType: String
	}
});

module.exports={
  deleteOne,
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = notes.findIndex(note => note.id === id);
  Notes.splice(idx, 1);
}

module.exports = mongoose.model('Image', imageSchema);
module.exports = mongoose.model('Note', noteSchema);


