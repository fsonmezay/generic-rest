-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 04, 2017 at 05:27 PM
-- Server version: 5.5.55-0+deb8u1
-- PHP Version: 5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `generic-rest-api-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `bar`
--

CREATE TABLE IF NOT EXISTS `bar` (
`id` bigint(20) unsigned NOT NULL,
  `property_name` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `property_value` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `bar`
--

INSERT INTO `bar` (`id`, `property_name`, `property_value`) VALUES
(1, 'Deneme', 'deneme val'),
(2, 'Deneme Name', 'Deneme Value'),
(3, 'Deneme_', '_alşkds jfşlakj'),
(5, 'Deneme', 'asdhafd'),
(6, 'yeni bar eklene', 'eklene ey aşuk eklene'),
(7, 'alksdhf ash', 'l kjhsalkjfhasld'),
(9, 'asdfla sdlkjh', 'kjh laksdjhl');

-- --------------------------------------------------------

--
-- Table structure for table `foo`
--

CREATE TABLE IF NOT EXISTS `foo` (
`id` bigint(20) unsigned NOT NULL,
  `age` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `handler` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `hibernate_lazy_initializer` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `foo`
--

INSERT INTO `foo` (`id`, `age`, `name`, `handler`, `hibernate_lazy_initializer`) VALUES
(1, 11, 'salkjlSS', NULL, NULL),
(2, 10, 'Merhaba', NULL, NULL),
(3, 18, 'Deneme', NULL, NULL),
(4, 222, 'sdfjh lksjhd flk', NULL, NULL),
(5, 20, 'Deneme', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bar`
--
ALTER TABLE `bar`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foo`
--
ALTER TABLE `foo`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bar`
--
ALTER TABLE `bar`
MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `foo`
--
ALTER TABLE `foo`
MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;