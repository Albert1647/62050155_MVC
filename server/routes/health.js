const path = require('path');

const express = require('express');

const productsController = require('../controllers/health');

const router = express.Router();

// /ping => GET
// check server status
router.get('/ping', productsController.healthCheck);

// / => GET
// handle undefined path
router.get('/', productsController.pathHandler);

module.exports = router;
