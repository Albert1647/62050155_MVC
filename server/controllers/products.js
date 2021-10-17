// communicate between front-end and back-end (act like interface)

const Product = require("../models/product");

// getAllProducts -> GET
exports.getAllProducts = (req, res, next) => {
	const products = Product.fetchAll((products) => {
		res.send(products);
	});
};

// addProduct -> POST
exports.addProduct = (req, res, next) => {
	const product_name = req.body.product_name;
	const total_core = req.body.total_core;
	const statistic = req.body.statistic;
	// form model
	const product = new Product(
		null, // assign product_id later
		product_name,
		total_core,
		statistic,
	);
	product.save();
	res.sendStatus(200);
};