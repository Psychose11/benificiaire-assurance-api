-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour insurance_db
CREATE DATABASE IF NOT EXISTS `insurance_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `insurance_db`;

-- Listage de la structure de table insurance_db. beneficiaire
CREATE TABLE IF NOT EXISTS `beneficiaire` (
  `idBeneficiaire` int NOT NULL AUTO_INCREMENT,
  `nomBeneficiaire` varchar(100) NOT NULL,
  `lienParente` varchar(50) DEFAULT NULL,
  `idEmploye` int DEFAULT NULL,
  PRIMARY KEY (`idBeneficiaire`),
  KEY `idEmploye` (`idEmploye`),
  CONSTRAINT `beneficiaire_ibfk_1` FOREIGN KEY (`idEmploye`) REFERENCES `employe` (`idEmploye`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table insurance_db.beneficiaire : ~1 rows (environ)
INSERT INTO `beneficiaire` (`idBeneficiaire`, `nomBeneficiaire`, `lienParente`, `idEmploye`) VALUES
	(1, 'Marie Beneficiaire', 'Conjoint', 1);

-- Listage de la structure de table insurance_db. compagnieassurance
CREATE TABLE IF NOT EXISTS `compagnieassurance` (
  `idCompagnie` int NOT NULL AUTO_INCREMENT,
  `nomCompagnie` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idCompagnie`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table insurance_db.compagnieassurance : ~1 rows (environ)
INSERT INTO `compagnieassurance` (`idCompagnie`, `nomCompagnie`, `contact`, `mail`) VALUES
	(1, 'AXA', 'Jean Contact', 'contact@axa.com');

-- Listage de la structure de table insurance_db. demandemiseajour
CREATE TABLE IF NOT EXISTS `demandemiseajour` (
  `idDemande` int NOT NULL AUTO_INCREMENT,
  `idEmploye` int DEFAULT NULL,
  `idRH` int DEFAULT NULL,
  `idBeneficiaire` int DEFAULT NULL,
  `statut` varchar(50) DEFAULT 'En attente',
  `dateDemande` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idDemande`),
  KEY `idEmploye` (`idEmploye`),
  KEY `idRH` (`idRH`),
  KEY `idBeneficiaire` (`idBeneficiaire`),
  CONSTRAINT `demandemiseajour_ibfk_1` FOREIGN KEY (`idEmploye`) REFERENCES `employe` (`idEmploye`),
  CONSTRAINT `demandemiseajour_ibfk_2` FOREIGN KEY (`idRH`) REFERENCES `ressourcehumaine` (`idRH`),
  CONSTRAINT `demandemiseajour_ibfk_3` FOREIGN KEY (`idBeneficiaire`) REFERENCES `beneficiaire` (`idBeneficiaire`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table insurance_db.demandemiseajour : ~1 rows (environ)
INSERT INTO `demandemiseajour` (`idDemande`, `idEmploye`, `idRH`, `idBeneficiaire`, `statut`, `dateDemande`) VALUES
	(1, 1, 1, 1, 'Notifiée', '2025-04-28 05:44:36');

-- Listage de la structure de table insurance_db. employe
CREATE TABLE IF NOT EXISTS `employe` (
  `idEmploye` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idEmploye`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table insurance_db.employe : ~1 rows (environ)
INSERT INTO `employe` (`idEmploye`, `nom`, `mail`, `telephone`) VALUES
	(1, 'John Doe', 'john@example.com', '0612345678');

-- Listage de la structure de table insurance_db. ressourcehumaine
CREATE TABLE IF NOT EXISTS `ressourcehumaine` (
  `idRH` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `poste` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idRH`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table insurance_db.ressourcehumaine : ~1 rows (environ)
INSERT INTO `ressourcehumaine` (`idRH`, `nom`, `mail`, `telephone`, `poste`) VALUES
	(1, 'Sarah RH', 'sarah@example.com', '0654321876', 'Responsable RH');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
