const Class = require("../models/classes");


module.exports={
    index,
    show,
    new: newClass,
    create
}

async function index(req,res){
    const classes = await Class.find({});
    res.render('classes/index', {title: 'All Classes', classes});
}

async function show(req,res){
    const classes = await Class.findById(req.params.id)
}

function newClass(req,res){
    req.render('classes/new', {title: 'Add Class',errorMsg:''});
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new movie
      const classes = await Class.create(req.body);
      // Redirect to the new movie's show functionality 
      res.redirect(`/classes/${classes._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('classes/new', { errorMsg: err.message });
    }
  }