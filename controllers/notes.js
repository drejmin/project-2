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
    const Note = await Notes.findById(req.params.id)
}


function update(req,res){
  req.body.done = !!req.body.done;
  Notes.update(req.params.id, req.body);
  res.redirect(`/notes/${req.params.id})`);
}

function deleteNote(req,res){
  Notes.deleteOne(req.params.id);
  res.redirect('/notes');
}

async function create(req,res){
  try {
    const note = await Notes.create(req.params.id, req.body);
    await note.save();
    notes.push(note);
    res.redirect(`/notes/${req.param.id}`);
    
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.redirect({ title: 'errorMsg', errMsg: err.message }, 'notes/');
    //res.redirect('notes/',{ title: 'errorMsg', errMsg: err.message } );
    
  }
}

function newNote(req,res){
    res.render('notes/new', {title: 'Add Note',errorMsg:''});
}

//   // references to DOM elements
// const list = document.querySelector('.list');
// const items = Array.from(document.querySelectorAll('.item'));
// const indicators = Array.from(document.querySelectorAll('.indicator'));

// // create an observer with the list as intersection root
// const observer = new IntersectionObserver(onIntersectionObserved, {
//   root: list,
//   threshold: 0.6
// });

// // observe each item
// items.forEach(item => {
//   observer.observe(item);
// });

// // when the observer detects an entry changing 
// // (item entering or exiting  list)
// // and the entry is intersecting
// // get the intersecting item’s index
// // set the correct indicator to active
// function onIntersectionObserved(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const intersectingIndex = items.indexOf(entry.target);
//       activateIndicator(intersectingIndex);
//     }
//   });
// }

// // toggle an `active` class on the indicators
// function activateIndicator(index) {
//   indicators.forEach((indicator, i) => {
//     indicator.classList.toggle('active', i === index);
//   });
// }