const BeneficiaireService = require('../services/beneficiaireService');

exports.createBeneficiaire = async (req, res) => {
  try {
    const { nomBeneficiaire, lienParente, idEmploye } = req.body;
    const beneficiaire = await BeneficiaireService.createBeneficiaire(nomBeneficiaire, lienParente, idEmploye);
    res.status(201).json(beneficiaire);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
