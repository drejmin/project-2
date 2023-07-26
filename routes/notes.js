const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const notesCtrl = require('../controllers/notes');
	
// GET /notes
router.get('/', notesCtrl.index);
// GET /notes/new
router.get('/new', notesCtrl.new);
// GET /notes/:id (show functionality) MUST be below new route
router.get('/:id', notesCtrl.show);
// DELETE /notes/:id
//router.get('/:id', notesCtrl.delete);
// POST /notes
router.post('/', notesCtrl.create);
	
module.exports = router;