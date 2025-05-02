const DemandeMiseAJourService = require('../services/demandeMiseAJourService');

exports.createDemande = async (req, res) => {
  try {
    const { idEmploye, idRH, idBeneficiaire } = req.body;
    const demande = await DemandeMiseAJourService.createDemande(idEmploye, idRH, idBeneficiaire);
    res.status(201).json(demande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.validerDemande = async (req, res) => {
  try {
    const { idDemande } = req.params;
    const updated = await DemandeMiseAJourService.validerDemande(idDemande);
    if (updated) {
      res.status(200).json({ message: 'Demande validée avec succès.' });
    } else {
      res.status(404).json({ message: 'Demande non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.notifierCompagnie = async (req, res) => {
  try {
    const { idDemande } = req.params;
    const updated = await DemandeMiseAJourService.notifierCompagnieAssurance(idDemande);
    if (updated) {
      console.log(`Notification envoyée à la compagnie pour la demande ID ${idDemande}`);
      res.status(200).json({ message: 'Notification envoyée avec succès.' });
    } else {
      res.status(404).json({ message: 'Demande non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllRequest = async (req, res) => {
  try {
    const request = await DemandeMiseAJourService.getAllRequest();
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};