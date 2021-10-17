// routes : define api list and its controller

const path = require('path');

const express = require('express');

const assignment_controller = require('../controllers/assignments');

const router = express.Router();

// /products => GET
router.get('/assignment', assignment_controller.getAllAssignment);

router.post('/add-assignment', assignment_controller.addAssignment);

router.put('/edit-assignment', assignment_controller.editAssignment);

module.exports = router;