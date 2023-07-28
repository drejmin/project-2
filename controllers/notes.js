//const Class = require("../models/classes");
//const Group = require("../models/groups");
const Note = require("../models/note");

module.exports={
    index,
    show,
    new: newNote,
    create,
    delete: deleteNote,
    update,
}

async function index(req,res){
    const notes = await Note.find({});
    res.render('notes/index.ejs', {title: 'All Notes', notes});
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

async function create(req, res) {
    try {
      const note = await Note.create(req.body);
      res.redirect(`/notes/${note._id}`);;
    } catch (error) {
      res.render('notes', { errorMsg: err.message });
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