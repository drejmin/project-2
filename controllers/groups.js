const Groups = require("../models/group");


module.exports={
    index,
    show,
    new: newClass,
    create
}

async function index(req,res){
    const group = await Groups.find({});
    res.render('groups/index', {title: 'All Groups', group});
}

async function show(req,res){
    const group = await Groups.findById(req.params.id)
    res.render(`/groups/${req.params.id}`);
}

function newClass(req,res){
    res.render('groups/new', {title: 'Add Group',errorMsg:''});
}

async function create(req, res) {
    
    try {
      // Update this line because now we need the _id of the new movie
      const group = await Groups.create(req.body, req.params.id);
      // Redirect to the new movie's show functionality 
      res.redirect(`/groups`);//${groups._id}
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('groups', { errorMsg: err.message });
    }
  }