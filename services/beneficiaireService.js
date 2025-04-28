const pool = require('../config/database');
const Beneficiaire = require('../models/Beneficiaire');

class BeneficiaireService {
  static async createBeneficiaire(nomBeneficiaire, lienParente, idEmploye) {
    const [result] = await pool.query(
      'INSERT INTO Beneficiaire (nomBeneficiaire, lienParente, idEmploye) VALUES (?, ?, ?)',
      [nomBeneficiaire, lienParente, idEmploye]
    );
    return new Beneficiaire(result.insertId, nomBeneficiaire, lienParente, idEmploye);
  }
}

module.exports = BeneficiaireService;
