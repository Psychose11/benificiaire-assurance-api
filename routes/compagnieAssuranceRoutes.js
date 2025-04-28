const express = require('express');
const router = express.Router();
const compagnieController = require('../controllers/compagnieAssuranceController');

// Routes
router.post('/', compagnieController.createCompagnie);
router.get('/', compagnieController.getAllCompagnies);

module.exports = router;
