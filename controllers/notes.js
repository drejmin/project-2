//const Class = require("../models/classes");
//const Group = require("../models/groups");
const Notes = require("../models/note.js");
const notes ={};
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

async function show(req,res){
    const note = await Notes.findById(req.params.id)
    res.render(`/notes/${req.params.id}`, {title:'Note',note});
}


function update(req,res){
  req.body.done = !!req.body.done;
  Notes.update(req.params.id, req.body);
  res.redirect(`/notes/${req.params.id})`);
}

function deleteNote(id){
  id=parseInt(id);
  const idx = notes.findIndex(note=>note.id===id)
  notes.splice(idx,1)
  // Notes.deleteOne(req.params.id);
  // res.redirect('/notes');
}

async function create(req,res){

  try {
    note.id = Date.now()%1000000;
    const note = await Notes.create(req.params.id, req.body);
    res.redirect(`/notes`);//${req.param.id}
    
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

