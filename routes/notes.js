const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const notesCtrl = require('../controllers/notes');
	
// GET /notes
router.get('/notes', notesCtrl.index);
// GET /notes/new
router.get('notes/new', notesCtrl.new);
// GET /notes/:id (show functionality) MUST be below new route
router.get('notes/:id', notesCtrl.show);
// DELETE /notes/:id
//router.get('/:id', notesCtrl.delete);
// POST /notes
router.post('notes/', notesCtrl.create);

	
module.exports = router;