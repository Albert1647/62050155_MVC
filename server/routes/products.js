const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /products => GET
router.get('/products', productsController.getAllProduct);

module.exports = router;
