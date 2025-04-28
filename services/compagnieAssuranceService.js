const pool = require('../config/database');
const CompagnieAssurance = require('../models/CompagnieAssurance');

class CompagnieAssuranceService {
  static async createCompagnie(nomCompagnie, contact, mail) {
    const [result] = await pool.query(
      'INSERT INTO CompagnieAssurance (nomCompagnie, contact, mail) VALUES (?, ?, ?)',
      [nomCompagnie, contact, mail]
    );
    return new CompagnieAssurance(result.insertId, nomCompagnie, contact, mail);
  }

  static async getAllCompagnies() {
    const [rows] = await pool.query('SELECT * FROM CompagnieAssurance');
    return rows.map(row => new CompagnieAssurance(row.idCompagnie, row.nomCompagnie, row.contact, row.mail));
  }
}

module.exports = CompagnieAssuranceService;
