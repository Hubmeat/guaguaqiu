-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-12 02:43:56
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guaguaqiu`
--

-- --------------------------------------------------------

--
-- 表的结构 `indexlist`
--

CREATE TABLE `indexlist` (
  `id` int(20) NOT NULL,
  `shopName` varchar(100) NOT NULL,
  `shopSummary` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indexlist`
--

INSERT INTO `indexlist` (`id`, `shopName`, `shopSummary`) VALUES
(1, '乐哈哈超市', '好多好吃的'),
(2, '小花卷', '我们总去'),
(3, '乐多芬蛋糕房', '这个蛋糕房有啥啊？'),
(4, '花好月圆花店', '快买花送给女朋友吧'),
(5, '梦里香麻辣烫', '以后卖麻辣烫就起这个名字');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `indexlist`
--
ALTER TABLE `indexlist`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `indexlist`
--
ALTER TABLE `indexlist`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
