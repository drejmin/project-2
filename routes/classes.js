const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const classesCtrl = require('../controllers/classes');
	
// GET /notes
router.get('/classes', classesCtrl.index);
// GET /notes/new
router.get('/classes/new', classesCtrl.new);
// GET /notes/:id (show functionality) MUST be below new route
router.get('/classes/:id', classesCtrl.show);
// DELETE /notes/:id
router.delete('/:id', classesCtrl.delete);
// POST /notes
router.post('/classes', classesCtrl.create);
	
module.exports = router;