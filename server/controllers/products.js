// communicate between front-end and back-end (act like interface)

const Product = require("../models/product");

// getAllAssignment -> GET
exports.getAllProducts = (req, res, next) => {
	const products = Product.fetchAll((products) => {
		res.send(products);
	});
};

// addAssignment -> POST
exports.addProduct = (req, res, next) => {
	const product_name = req.body.product_name;
	const total_core = req.body.total_core;
	const statistic = req.body.statistic;
	// form model
	const product = new Product(
		null, // assign assignment_id later
		product_name,
		total_core,
		statistic,
	);
	product.save();
	res.sendStatus(200);
};

// exports.editAssignment = (req, res, next) => {
// 	const assignment_id = req.body.assignment_id;
// 	const assignment_name = req.body.assignment_name;
// 	const description = req.body.description;
// 	const due_date = req.body.due_date;
// 	const assign_to = req.body.assign_to;
// 	const assignment = new Assignment(
// 		assignment_id,
// 		assignment_name,
// 		description,
// 		due_date,
// 		assign_to
// 	);
//     assignment.save()
// 	res.sendStatus(200);
// };
