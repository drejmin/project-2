const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classesSchema = new Schema({
  subject: {type:String, required: true},
  courseName: String,
  teacherName: String,
  private: Boolean,
}, {
  timestamps: true
});
module.exports={
    deleteOne,
  };
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = classes.findIndex(course => course.id === id);
    Classes.splice(idx, 1);
  }

module.exports = mongoose.model('Class', classesSchema);
