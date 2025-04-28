const express = require('express');
const router = express.Router();
const beneficiaireController = require('../controllers/beneficiaireController');

router.post('/', beneficiaireController.createBeneficiaire);

module.exports = router;
