# benificiaire d'assurance API

## 🚀 Vision du projet

Permettre à un employé de mettre à jour son dossier de bénéficiaire d'assurance via une API REST rapide, traçable et fiable.

### Acteurs impliqués :
- **Employé**
- **Ressource Humaine (RH)**
- **Compagnie d'Assurance**


## 📊 Fonctionnalités de l'API

- **Création d'employés**, de **ressources humaines** et de **compagnies d'assurance**.
- **Enregistrement d'un nouveau bénéficiaire.**
- **Gestion des demandes de mise à jour** de bénéficiaire.
- **Validation des demandes** par RH.
- **Notification de la compagnie d'assurance.**

---

## 💡 Technologies utilisées

- **Node.js**
- **Express.js**
- **MySQL**
- **Postman**
---

## 🚿 Installation
1. **Cloner le projet**
```bash
    git clone https://github.com/Psychose11/benificiaire-assurance-api.git
```
2. **accéder au repo**
```bash
    cd benificiaire-assurance-api
```

3. **installer les dépendance**
```bash
    npm install
```
4. **charger le fichier sql et changer vos configuration dans config/database.js(host,username,password)**
```bash 
    mysql -u username -p database_name < benificiaire.sql
```
```javascript
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'insurance_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```
5. **lancer le projet avec npm run dev (vous pouvez changer dans package.json)**
```bash 
    npm run dev
```
## 🎈 Test avec postman

Voici les différentes requêtes disponibles pour interagir avec l'API

| **Nom de la requête**                | **Méthode** | **URL**                                      | **Body (exemple)**                                                                                                                                         |
|--------------------------------------|-------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Créer un Employé                     | POST        | `http://localhost:3000/api/employes`          | `{ "nom": "Rakoto Andrianina", "mail": "rakoto@example.mg", "telephone": "0321234567" }`                                                                 |
| Créer un RH                          | POST        | `http://localhost:3000/api/rh`               | `{ "nom": "Rasoanaivo HR", "mail": "rasoa@example.mg", "telephone": "0347654321", "poste": "Mpandrindra HR" }`                                           |
| Créer une Compagnie                  | POST        | `http://localhost:3000/api/compagnies`        | `{ "nomCompagnie": "Assurance Malagasy", "contact": "Jean Nirina", "mail": "contact@assurance.mg" }`                                                      |
| Créer un Bénéficiaire                | POST        | `http://localhost:3000/api/beneficiaires`     | `{ "nomBeneficiaire": "Voahirana", "lienParente": "Vadiko", "idEmploye": 2 }`                                                                            |
| Créer une Demande de Mise à Jour     | POST        | `http://localhost:3000/api/demandes`          | `{ "idEmploye": 2, "idRH": 2, "idBeneficiaire": 2 }`                                                                                                    |
| Valider une Demande                 | PUT         | `http://localhost:3000/api/demandes/valider/2`| -                                                                                                                                                          |
| Notifier Compagnie d'Assurance       | PUT         | `http://localhost:3000/api/demandes/notifier/2`| -                                                                                                                                                          |
| Voir tous les Employés               | GET         | `http://localhost:3000/api/employes`          | -                                                                                                                                                          |
| Voir tous les RH                     | GET         | `http://localhost:3000/api/rh`               | -                                                                                                                                                          |
| Voir toutes les Compagnies           | GET         | `http://localhost:3000/api/compagnies`        | -                                                                                                                                                          |

---

### By: Psychose11 👩‍💻

---