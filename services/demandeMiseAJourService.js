const pool = require('../config/database');
const DemandeMiseAJour = require('../models/DemandeMiseAJour');

class DemandeMiseAJourService {
  static async createDemande(idEmploye, idRH, idBeneficiaire) {
    const [result] = await pool.query(
      'INSERT INTO DemandeMiseAJour (idEmploye, idRH, idBeneficiaire) VALUES (?, ?, ?)',
      [idEmploye, idRH, idBeneficiaire]
    );
    return new DemandeMiseAJour(result.insertId, idEmploye, idRH, idBeneficiaire, 'En attente', new Date());
  }

  static async validerDemande(idDemande) {
    const [result] = await pool.query(
      'UPDATE DemandeMiseAJour SET statut = ? WHERE idDemande = ?',
      ['Validée', idDemande]
    );
    return result.affectedRows > 0;
  }

  static async notifierCompagnieAssurance(idDemande) {
    const [result] = await pool.query(
      'UPDATE DemandeMiseAJour SET statut = ? WHERE idDemande = ?',
      ['Notifiée', idDemande]
    );
    return result.affectedRows > 0;
  }
}

module.exports = DemandeMiseAJourService;
