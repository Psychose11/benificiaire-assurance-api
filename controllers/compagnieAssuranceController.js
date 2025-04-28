const CompagnieAssuranceService = require('../services/compagnieAssuranceService');

exports.createCompagnie = async (req, res) => {
  try {
    const { nomCompagnie, contact, mail } = req.body;
    const compagnie = await CompagnieAssuranceService.createCompagnie(nomCompagnie, contact, mail);
    res.status(201).json(compagnie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCompagnies = async (req, res) => {
  try {
    const compagnies = await CompagnieAssuranceService.getAllCompagnies();
    res.status(200).json(compagnies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
