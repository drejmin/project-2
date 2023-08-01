const Groups = require("../models/group.js");


module.exports={
    index,
    show,
    update,
    new: newGroup,
    delete: deleteGroup,
    create
}

async function index(req,res){
    const groups = await Groups.find({});
    res.render('groups/index', {title: 'All Groups', groups});
}
function update(req,res){
  req.body.done = !!req.body.done;
  Groups.update(req.params.id, req.body);
  res.redirect(`/groups/:id)`);
}
async function show(req,res){
    const group = await Groups.findById(req.params.id)
    res.render(`groups/show`, {title:'Group',group});
}

function newGroup(req,res){
    res.render('groups/new', {title: 'Add Group',errorMsg:''});
}
function deleteGroup(req,res){
  Groups.deleteOne(req.params.id);
  res.redirect('/groups');
}
async function create(req, res) {
    
    try {
      // Update this line because now we need the _id of the new movie
      const group = await Groups.create(req.body, req.params.id);
      // Redirect to the new movie's show functionality 
      res.redirect(`/groups/${group._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('groups/new', { title: 'errorMsg' , errorMsg: err.message });
    }
  }