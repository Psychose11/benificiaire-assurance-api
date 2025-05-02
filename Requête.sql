CREATE TABLE Beneficiaire (
    idBeneficiaire INT AUTO_INCREMENT PRIMARY KEY,
    nomBeneficiaire VARCHAR(100) NOT NULL,
    lienParente VARCHAR(50),
    idEmploye INT,
    FOREIGN KEY (idEmploye) REFERENCES Employe(idEmploye)
);

CREATE TABLE DemandeMiseAJour (
    idDemande INT AUTO_INCREMENT PRIMARY KEY,
    idEmploye INT,
    idRH INT,
    idBeneficiaire INT,
    statut VARCHAR(50) DEFAULT 'En attente',
    dateDemande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idEmploye) REFERENCES Employe(idEmploye),
    FOREIGN KEY (idRH) REFERENCES RessourceHumaine(idRH),
    FOREIGN KEY (idBeneficiaire) REFERENCES Beneficiaire(idBeneficiaire)
);
