const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employeController');

// Routes
router.post('/', employeController.createEmploye);
router.get('/', employeController.getAllEmployes);

module.exports = router;
