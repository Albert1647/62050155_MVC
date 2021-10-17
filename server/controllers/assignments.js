// communicate between front-end and back-end (act like interface)

const Assignment = require("../models/assignments");

// getAllAssignment -> GET
exports.getAllAssignment = (req, res, next) => {
	const assignment = Assignment.fetchAll((assignment) => {
		res.send(assignment);
	});
};

// addAssignment -> POST
exports.addAssignment = (req, res, next) => {
	const assignment_name = req.body.assignment_name;
	const description = req.body.description;
	const due_date = req.body.due_date;
	const assign_to = req.body.assign_to;
	const assignment = new Assignment(
		null, // assign assignment_id later
		assignment_name,
		description,
		due_date,
		assign_to
	);
	assignment.save();
	res.sendStatus(200);
};

exports.editAssignment = (req, res, next) => {
	const assignment_id = req.body.assignment_id;
	const assignment_name = req.body.assignment_name;
	const description = req.body.description;
	const due_date = req.body.due_date;
	const assign_to = req.body.assign_to;
	const assignment = new Assignment(
		assignment_id,
		assignment_name,
		description,
		due_date,
		assign_to
	);
    assignment.save()
	res.sendStatus(200);
};
