const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const groupsCtrl = require('../controllers/groups');
	
// GET /notes
router.get('/groups', groupsCtrl.index);
// GET /notes/new
router.get('/groups/new', groupsCtrl.new);
// GET /notes/:id (show functionality) MUST be below new route
router.get('/groups/:id', groupsCtrl.show);
// DELETE /notes/:id
//router.get('/:id', groupsCtrl.delete);
// POST /notes
router.post('/groups/', groupsCtrl.create);
	
module.exports = router;