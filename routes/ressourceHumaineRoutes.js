const express = require('express');
const router = express.Router();
const rhController = require('../controllers/ressourceHumaineController');

// Routes
router.post('/', rhController.createRH);
router.get('/', rhController.getAllRH);

module.exports = router;
