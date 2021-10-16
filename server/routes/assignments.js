// routes act / have behavior like 'controller' handle which process to use / apply

const path = require('path');

const express = require('express');

const assignment_controller = require('../controllers/assignments');

const router = express.Router();

// /products => GET
router.get('/assignment', assignment_controller.getAllAssignment);

router.post('/add-assignment', assignment_controller.addAssignment);

module.exports = router;
