//const Class = require("../models/classes");
//const Group = require("../models/groups");
const Notes = require("../models/note.js");

module.exports={
    index,
    show,
    create,
    new: newNote,
    delete: deleteNote,
    update,
}

async function index(req,res){
    const notes = await Notes.find({});
    res.render('notes/index', {title: 'All Notes', notes});
}

function show(req,res){
    const note =  Notes.findById(req.params.id)
    res.render(`notes/show`, {title:'Note',note});
}

function update(req,res){
  req.body.done = !!req.body.done;
  Notes.update(req.params.id, req.body);
  res.redirect(`/notes/:id)`);
}

function deleteNote(req,res){
  Notes.deleteOne(req.params.id);
  Notes.splice(notes._id,1)
  res.redirect('/notes');
}

async function create(req,res){

  try {
    const note = await Notes.create(req.params.id, req.body);
    res.redirect(`/notes/${note._id}`);
    
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
   // res.redirect({ title: 'errorMsg', errMsg: err.message }, 'notes/');
    res.redirect('notes/new',{ title: 'errorMsg', errMsg: err.message } );
    
  }
}

function newNote(req,res){
    res.render('notes/new', {title: 'Add Note',errorMsg:''});
}

