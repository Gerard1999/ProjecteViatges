-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2021 a las 21:02:38
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pj02_gerarlopez_sergialcoria`
--
CREATE DATABASE IF NOT EXISTS `pj02_gerarlopez_sergialcoria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pj02_gerarlopez_sergialcoria`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserves`
--

CREATE TABLE `reserves` (
  `id` int(10) UNSIGNED NOT NULL,
  `data` date NOT NULL,
  `pais` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `telefon` varchar(9) NOT NULL,
  `persones` tinyint(4) NOT NULL,
  `preu` decimal(6,2) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserves`
--

INSERT INTO `reserves` (`id`, `data`, `pais`, `nom`, `telefon`, `persones`, `preu`, `foto`) VALUES
(2, '2021-01-28', 'Alemanya', 'Guillem', '123412343', 5, '2000.00', './images/alemanya.jpg'),
(3, '2021-01-22', 'Canadà', 'Sergi', '876543456', 4, '1500.00', './images/canada.jpg'),
(4, '2021-01-30', 'Japó', 'Mireia', '123444672', 2, '2800.00', './images/japo.jpg'),
(7, '2021-01-29', 'Itàlia', 'Geri', '12346132', 4, '900.00', './images/italia.jpg'),
(26, '2021-01-21', 'Illes Cook', 'Jaumeee', '45643', 5, '3100.00', './images/cook_islands.jpg'),
(59, '2021-01-21', 'Algèria', 'Ermessenda', '987654321', 4, '960.00', './images/algeria.jpeg'),
(67, '2021-01-21', 'Thailandia', 'Laia', '673246533', 3, '1600.00', './images/thailandia.jpg'),
(75, '2021-01-21', 'Alemanya', 'sdfg', '2424', 2, '500.00', './images/alemanya.jpg'),
(82, '2021-01-30', 'Madagascar', 'Gerard', '12346876', 2, '2080.00', './images/madagascar.jpg'),
(98, '2021-01-22', 'Thailandia', 'Gerard', '2343', 2, '2000.00', './images/thailandia.jpg'),
(100, '2021-01-22', 'Canada', 'Gerard', '23', 2, '2000.00', './images/canada.jpg'),
(105, '2021-01-22', 'Canada', 'Gerard', '23', 2, '2000.00', './images/canada.jpg'),
(107, '2021-02-07', 'ItÃ lia', 'Mireia', '987654321', 3, '900.00', './images/italia.jpg'),
(108, '2021-03-27', 'Cuba', 'Paquito', '123456789', 9, '800.00', './images/cuba.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reserves`
--
ALTER TABLE `reserves`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reserves`
--
ALTER TABLE `reserves`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
