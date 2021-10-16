// db JSON 
// app database
const Assignment = require('../models/assignments');
let assignment_id = 1;

// getAllAssignment -> GET
exports.getAllAssignment = (req, res, next) => {
    const assignment = Assignment.fetchAll(assignment => {
        res.send(assignment)
    }) 
};

// addAssignment -> POST
exports.addAssignment = (req, res, next) => {
    let assignmentData = req.body
    assignmentData.assignment_id = assignment_id
    const assignment = new Assignment(assignmentData);
    assignment.save();
    res.sendStatus(200)
};