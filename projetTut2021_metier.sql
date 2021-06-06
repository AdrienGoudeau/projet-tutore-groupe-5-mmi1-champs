-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  sqletud.u-pem.fr
-- Généré le :  Lun 07 Juin 2021 à 01:19
-- Version du serveur :  5.5.62-0+deb8u1-log
-- Version de PHP :  7.0.33-0+deb9u7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `agoudeau_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `projetTut2021_metier`
--

CREATE TABLE `projetTut2021_metier` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `podcast` varchar(255) NOT NULL,
  `salaire` text NOT NULL,
  `taches` text NOT NULL,
  `competences` text NOT NULL,
  `qualites` text NOT NULL,
  `niv_forma` text NOT NULL,
  `poursuite_etu` text NOT NULL,
  `id_cat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `projetTut2021_metier`
--
ALTER TABLE `projetTut2021_metier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contient` (`id_cat`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `projetTut2021_metier`
--
ALTER TABLE `projetTut2021_metier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `projetTut2021_metier`
--
ALTER TABLE `projetTut2021_metier`
  ADD CONSTRAINT `contient` FOREIGN KEY (`id_cat`) REFERENCES `projetTut2021_categorie_metiers` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
