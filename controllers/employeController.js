const EmployeService = require('../services/employeService');

exports.createEmploye = async (req, res) => {
  try {
    const { nom, mail, telephone } = req.body;
    const employe = await EmployeService.createEmploye(nom, mail, telephone);
    res.status(201).json(employe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllEmployes = async (req, res) => {
  try {
    const employes = await EmployeService.getAllEmployes();
    res.status(200).json(employes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
