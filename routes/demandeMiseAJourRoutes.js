const express = require('express');
const router = express.Router();
const demandeController = require('../controllers/demandeMiseAJourController');

router.post('/', demandeController.createDemande);
router.put('/valider/:idDemande', demandeController.validerDemande);
router.put('/notifier/:idDemande', demandeController.notifierCompagnie);
router.get('/', demandeController.getAllRequest);
module.exports = router;
