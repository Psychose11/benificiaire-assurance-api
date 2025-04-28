class DemandeMiseAJour {
    constructor(idDemande, idEmploye, idRH, idBeneficiaire, statut, dateDemande) {
      this.idDemande = idDemande;
      this.idEmploye = idEmploye;
      this.idRH = idRH;
      this.idBeneficiaire = idBeneficiaire;
      this.statut = statut;
      this.dateDemande = dateDemande;
    }
  }
  
  module.exports = DemandeMiseAJour;
  