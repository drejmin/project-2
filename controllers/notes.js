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
    const notes = await Note.find({});
    res.render('notes/index.ejs', {title: 'All Notes', notes});
}

async function show(req,res){
    const note = await Note.findById(req.params.id)
}

function newNote(req,res){
    res.render('notes/new.ejs', {title: 'Add Note',errorMsg:''});
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