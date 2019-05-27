-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 03, 2019 at 09:47 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feedback`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `cio`
--

DROP TABLE IF EXISTS `cio`;
CREATE TABLE IF NOT EXISTS `cio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `cio` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bank` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cio`
--

INSERT INTO `cio` (`Id`, `cio`, `password`, `bank`) VALUES
(20, 'suresh@gmail.com', '12345', '5'),
(16, 'yogi@gmail.com', '12345', '1'),
(21, 'temp@gmail.com', '12345', '6'),
(23, 'bhargavi@gmail.com', '12345', '8'),
(24, 'ashwini@gmail.com', '12345', '9'),
(26, 'manu@gmail.com', '12345', '10'),
(27, 'temp3@gmail.com', '12345', '11'),
(28, 'temp4@gmail.com', '12345', '11'),
(29, 'temp5@gmail.com', '12345', '11'),
(30, 'temp6@gmail.com', '12345', '11'),
(31, 'temp7@gmail.com', '12345', '11'),
(32, 'temp8@gmail.com', '12345', '11'),
(35, 'temp16@gmail.com', '12345', 'BAnk');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `CIO` varchar(255) NOT NULL,
  `p1` int(11) DEFAULT '8',
  `p2` int(11) DEFAULT '8',
  `p3` int(11) DEFAULT '8',
  `p4` int(11) DEFAULT '8',
  `p5` int(11) DEFAULT '8',
  `p6` int(11) DEFAULT '8',
  `p7` int(11) DEFAULT '8',
  `p8` int(11) DEFAULT '8',
  `p9` int(11) DEFAULT '8',
  `p10` int(11) DEFAULT '8',
  PRIMARY KEY (`CIO`),
  UNIQUE KEY `CIO` (`CIO`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`CIO`, `p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `p10`) VALUES
('yogi@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('suresh@gmail.com', 1, 3, 4, 8, 5, 2, 3, 4, 5, 1),
('temp@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('bhargavi@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('ashwini@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp16@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('manu@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp3@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp4@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp5@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp6@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp7@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp8@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
CREATE TABLE IF NOT EXISTS `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Pid` varchar(11) DEFAULT NULL,
  `Topic` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `Pid`, `Topic`) VALUES
(1, 'p1', 'AI Based Email Segregation/Routing System'),
(2, 'p2', 'Personal Electronic card(PEC)'),
(3, 'p3', 'LLMS e-Proposal App'),
(4, 'p4', 'Global attestation platform for authentic identities and credential'),
(5, 'p5', 'Canara DiYA'),
(6, 'p6', 'Yono'),
(7, 'p7', 'CANDI BRANCH'),
(8, 'p8', 'Decision Intelligence using satelite big data analytics for agricultural credit lending in india'),
(9, 'p9', 'TruBot,a multi-skilled Bot that can automate tedious processes and systems in banks'),
(10, 'p10', 'UNFIFCATION OF CORE BANKING involving Retail');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
