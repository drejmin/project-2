const Classes = require("../models/class.js");


module.exports={
    index,
    show,
    new: newClass,
    create,
    delete: deleteClass,
    update,
}

async function index(req,res){
    const classes = await Classes.find({});
    res.render('classes/index', {title: 'All Classes', classes});
}

async function show(req,res){
    const course = await Classes.findById(req.params.id)
    res.render('classes/show',{title:'Class', course});
}

function update(req,res){
  req.body.done = !!req.body.done;
  Classes.update(req.params.id, req.body);
  res.redirect('/classes/:id');
}

function deleteClass(req,res){
  Classes.deleteOne(req.params.id);
  Classes.splice(course.id,1)
  res.redirect('/classes');
}

async function create(req, res) {
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    // Update this line because now we need the _id of the new class
    const course = await Classes.create(req.params.id, req.body);
    course.id = Date.now() % 1000000
    // Redirect to the new class's show functionality 
    res.redirect(`/classes/${course._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.redirect('classes/new', { title:'errorMsg', errorMsg: err.message });
  }
}

function newClass(req,res){
    req.render('classes/new', {title: 'Add Class',errorMsg:''});
}
