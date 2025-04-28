const pool = require('../config/database');
const RessourceHumaine = require('../models/RessourceHumaine');

class RessourceHumaineService {
  static async createRH(nom, mail, telephone, poste) {
    const [result] = await pool.query(
      'INSERT INTO RessourceHumaine (nom, mail, telephone, poste) VALUES (?, ?, ?, ?)',
      [nom, mail, telephone, poste]
    );
    return new RessourceHumaine(result.insertId, nom, mail, telephone, poste);
  }

  static async getAllRH() {
    const [rows] = await pool.query('SELECT * FROM RessourceHumaine');
    return rows.map(row => new RessourceHumaine(row.idRH, row.nom, row.mail, row.telephone, row.poste));
  }
}

module.exports = RessourceHumaineService;
