const pool = require('../config/database');
const Employe = require('../models/Employe');

class EmployeService {
  static async createEmploye(nom, mail, telephone) {
    const [result] = await pool.query(
      'INSERT INTO Employe (nom, mail, telephone) VALUES (?, ?, ?)',
      [nom, mail, telephone]
    );
    return new Employe(result.insertId, nom, mail, telephone);
  }

  static async getAllEmployes() {
    const [rows] = await pool.query('SELECT * FROM Employe');
    return rows.map(row => new Employe(row.idEmploye, row.nom, row.mail, row.telephone));
  }
}

module.exports = EmployeService;
