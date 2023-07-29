//const Class = require("../models/classes");
//const Group = require("../models/groups");
const Note = require("../models/note");
const publicNote = require("../models/note")
module.exports={
    index,
    show,
    new: newNote,
    create,
    delete: deleteNote,
    update,
    getPublic,
}

async function index(req,res){
    const notes = await Note.find({});
    res.render('notes/index', {title: 'All Notes', notes});
}

async function show(req,res){
    const Note = await Note.findById(req.params.id)
}

function newNote(req,res){
    res.render('notes/new', {title: 'Add Note',errorMsg:''});
}

function update(req,res){
  req.body.done = !!req.body.done;
  Note.update(req.params.id, req.body);
  res.redirect(`/notes/${req.params.id})`);
}

function deleteNote(req,res){
  Note.deleteOne(req.params.id);
  res.redirect('/notes');
}

async function create(req,res){
  try {
    const Notes = await Note.create(req.params.id, req.body)
    await Note.save();
    notes.push(Note)
    res.redirect(`/notes/${req.param.id}`);
  
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.redirect('notes/new', { title: 'errorMsg', errMsg: err.message });
 
  }
}
  
function getPublic(){
  for(let i = 0; i> notes.length; i++){
    if (Note===!private){
      publicNote.push[i];
    }
    return publicNote;
  }
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