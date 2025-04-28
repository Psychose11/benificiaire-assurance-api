const express = require('express');
const app = express();
const employeRoutes = require('./routes/employeRoutes');
const ressourceHumaineRoutes = require('./routes/ressourceHumaineRoutes');
const compagnieAssuranceRoutes = require('./routes/compagnieAssuranceRoutes');
const BeneficiaireRoutes = require('./routes/beneficiaireRoutes');
const demandeMiseAJourRoutes = require('./routes/demandeMiseAJourRoutes');
const Beneficiaire = require('./models/Beneficiaire');

app.use(express.json());

// Définir les routes
app.use('/api/employes', employeRoutes);
app.use('/api/rh', ressourceHumaineRoutes);
app.use('/api/compagnies', compagnieAssuranceRoutes);
app.use('/api/beneficiaires', BeneficiaireRoutes);
app.use('/api/demandes',demandeMiseAJourRoutes);
// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en marche sur le port ${PORT}`);
});
