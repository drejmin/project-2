//const Class = require("../models/classes");
//const Group = require("../models/groups");
const Note = require("../models/notes");

module.exports={
    index,
    show,
    new: newNote,
    create
}

async function index(req,res){
    const note = await Note.find({});
    res.render('notes/index', {title: 'All Notes', notes});
}

async function show(req,res){
    const note = await Note.findById(req.params.id)
}

function newNote(req,res){
    req.render('notes/new', {title: 'Add Note',errorMsg:''});
}

async function create(req, res) {
    // Remove empty properties so that defaults will be applied
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new movie
      const notes = await Note.create(req.body);
      // Redirect to the new movie's show functionality 
      res.redirect(`/notes/${note._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('notes/new', { errorMsg: err.message });
    }
  }