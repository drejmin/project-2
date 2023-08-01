const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  memberName: String,
  ownerName: String,
  groupName:String,

}, {
  timestamps: true
});
module.exports={
  deleteOne,
};

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the todo
  const idx = groups.findIndex(groups => groups.id === id);
  groups.splice(idx, 1);
}

module.exports = mongoose.model('Group', groupSchema);
