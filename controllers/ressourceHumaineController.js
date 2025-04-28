const RessourceHumaineService = require('../services/ressourceHumaineService');

exports.createRH = async (req, res) => {
  try {
    const { nom, mail, telephone, poste } = req.body;
    const rh = await RessourceHumaineService.createRH(nom, mail, telephone, poste);
    res.status(201).json(rh);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllRH = async (req, res) => {
  try {
    const rhs = await RessourceHumaineService.getAllRH();
    res.status(200).json(rhs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
