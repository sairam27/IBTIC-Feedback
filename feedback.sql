-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2018 at 12:44 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `cio`
--

CREATE TABLE `cio` (
  `Id` int(11) NOT NULL,
  `cio` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bank` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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

CREATE TABLE `feedback` (
  `CIO` varchar(255) NOT NULL,
  `p1` int(11) DEFAULT NULL,
  `p2` int(11) DEFAULT NULL,
  `p3` int(11) DEFAULT NULL,
  `p4` int(11) DEFAULT NULL,
  `p5` int(11) DEFAULT NULL,
  `p6` int(11) DEFAULT NULL,
  `p7` int(11) DEFAULT NULL,
  `p8` int(11) DEFAULT NULL,
  `p9` int(11) DEFAULT NULL,
  `p10` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`CIO`, `p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `p10`) VALUES
('yogi@gmail.com', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3),
('suresh@gmail.com', 8, 8, 8, 8, 8, 8, 8, 8, 8, 8),
('temp@gmail.com', 3, 3, 3, 3, 3, 4, 4, 4, 4, 4),
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cio`
--
ALTER TABLE `cio`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`CIO`),
  ADD UNIQUE KEY `CIO` (`CIO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cio`
--
ALTER TABLE `cio`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
