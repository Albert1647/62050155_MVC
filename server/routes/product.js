// routes : define api list and its controller

const path = require('path');

const express = require('express');

const product_controller = require('../controllers/products');

const router = express.Router();

// /products => GET
router.get('/products', product_controller.getAllProducts);

// /products => POST
router.post('/add-product', product_controller.addProduct);

module.exports = router;