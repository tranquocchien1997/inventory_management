-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th7 06, 2020 lúc 11:58 AM
-- Phiên bản máy phục vụ: 10.2.32-MariaDB-log-cll-lve
-- Phiên bản PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `tindungb_inventory`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `action`
--

CREATE TABLE `action` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `action_type_id` int(11) DEFAULT NULL,
  `inventory_id` int(11) DEFAULT NULL,
  `inventory_receive_id` int(11) DEFAULT NULL,
  `inventory_product_id` int(11) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `contract_id` int(11) DEFAULT NULL,
  `notification_id` int(11) DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` double(8,3) DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 23,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `action`
--

INSERT INTO `action` (`id`, `action_type_id`, `inventory_id`, `inventory_receive_id`, `inventory_product_id`, `creator_id`, `contract_id`, `notification_id`, `code`, `quantity`, `amount`, `invalid`, `status`, `note`, `created_at`, `updated_at`) VALUES
(37, 9, 8, NULL, NULL, 1, NULL, NULL, NULL, 6779.050, NULL, 0, 24, NULL, '2020-05-17 17:00:00', '2020-05-19 07:18:06'),
(38, 9, 7, NULL, NULL, 1, NULL, NULL, NULL, 4392.000, NULL, 0, 24, NULL, '2020-05-17 17:00:00', '2020-05-18 10:14:29'),
(39, 9, 9, NULL, NULL, 1, NULL, NULL, NULL, 5922.650, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:19:13'),
(40, 9, 10, NULL, NULL, 1, NULL, NULL, NULL, 2863.200, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:19:38'),
(41, 9, 11, NULL, NULL, 1, NULL, NULL, NULL, 4244.500, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:20:03'),
(42, 9, 12, NULL, NULL, 1, NULL, NULL, NULL, 23694.290, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:20:34'),
(43, 9, 13, NULL, NULL, 1, NULL, NULL, NULL, 16746.900, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:20:59'),
(44, 9, 14, NULL, NULL, 1, NULL, NULL, NULL, 3992.950, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:23:47'),
(45, 9, 15, NULL, NULL, 1, NULL, NULL, NULL, 3661.150, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:24:16'),
(46, 9, 16, NULL, NULL, 1, NULL, NULL, NULL, 15.800, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:24:38'),
(47, 9, 17, NULL, NULL, 1, NULL, NULL, NULL, 8210.500, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:25:09'),
(48, 9, 18, NULL, NULL, 1, NULL, NULL, NULL, 10969.400, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:25:32'),
(50, 11, 8, 19, NULL, 1, NULL, NULL, NULL, 2220.050, NULL, 0, 24, NULL, '2020-05-19 06:45:58', '2020-05-19 06:45:58'),
(51, 11, 8, 21, NULL, 1, NULL, NULL, NULL, 101.000, NULL, 0, 24, NULL, '2020-05-19 06:47:59', '2020-05-19 06:47:59'),
(52, 11, 9, 19, NULL, 1, NULL, NULL, NULL, 520.250, NULL, 0, 24, NULL, '2020-05-18 17:00:00', '2020-05-19 07:13:53'),
(53, 11, 10, 19, NULL, 1, NULL, NULL, NULL, 1094.450, NULL, 0, 24, NULL, '2020-05-19 07:14:40', '2020-05-19 07:14:40'),
(54, 11, 10, 21, NULL, 1, NULL, NULL, NULL, 269.950, NULL, 0, 24, NULL, '2020-05-19 07:16:18', '2020-05-19 07:16:18'),
(55, 11, 11, 19, NULL, 1, NULL, NULL, NULL, 2091.550, NULL, 0, 24, NULL, '2020-05-19 07:26:22', '2020-05-19 07:26:22'),
(56, 11, 11, 24, NULL, 1, NULL, NULL, NULL, 469.950, NULL, 0, 24, NULL, '2020-05-19 07:45:11', '2020-05-19 07:45:11'),
(57, 11, 11, 21, NULL, 1, NULL, NULL, NULL, 42.000, NULL, 0, 24, NULL, '2020-05-19 07:45:37', '2020-05-19 07:45:37'),
(58, 11, 12, 19, NULL, 1, NULL, NULL, NULL, 81.950, NULL, 0, 24, NULL, '2020-05-19 07:47:10', '2020-05-19 07:47:10'),
(59, 11, 12, 24, NULL, 1, NULL, NULL, NULL, 1037.550, NULL, 0, 24, NULL, '2020-05-19 07:47:44', '2020-05-19 07:47:44'),
(60, 11, 12, 21, NULL, 1, NULL, NULL, NULL, 812.500, NULL, 0, 24, NULL, '2020-05-19 07:48:23', '2020-05-19 07:48:23'),
(61, 11, 12, 23, NULL, 1, NULL, NULL, NULL, 8186.800, NULL, 0, 24, NULL, '2020-05-19 07:49:01', '2020-05-19 07:49:01'),
(62, 11, 13, 19, NULL, 1, NULL, NULL, NULL, 392.450, NULL, 0, 24, NULL, '2020-05-19 07:49:39', '2020-05-19 07:49:39'),
(63, 11, 13, 24, NULL, 1, NULL, NULL, NULL, 274.950, NULL, 0, 24, NULL, '2020-05-19 07:50:08', '2020-05-19 07:50:08'),
(64, 11, 13, 21, NULL, 1, NULL, NULL, NULL, 661.900, NULL, 0, 24, NULL, '2020-05-19 07:51:11', '2020-05-19 07:51:11'),
(65, 11, 14, 19, NULL, 1, NULL, NULL, NULL, 1058.600, NULL, 0, 24, NULL, '2020-05-19 07:51:45', '2020-05-19 07:51:45'),
(66, 11, 14, 24, NULL, 1, NULL, NULL, NULL, 402.000, NULL, 0, 24, NULL, '2020-05-19 07:53:09', '2020-05-19 07:53:09'),
(67, 11, 14, 21, NULL, 1, NULL, NULL, NULL, 1333.550, NULL, 0, 24, NULL, '2020-05-19 07:53:44', '2020-05-19 07:53:44'),
(68, 11, 15, 20, NULL, 1, NULL, NULL, NULL, 1035.350, NULL, 0, 24, NULL, '2020-05-19 07:55:05', '2020-05-19 07:55:05'),
(69, 11, 15, 22, NULL, 1, NULL, NULL, NULL, 2621.650, NULL, 0, 24, NULL, '2020-05-19 07:55:37', '2020-05-19 07:55:37'),
(70, 11, 16, 20, NULL, 1, NULL, NULL, NULL, 7.850, NULL, 0, 24, NULL, '2020-05-19 07:56:03', '2020-05-19 07:56:03'),
(71, 11, 16, 22, NULL, 1, NULL, NULL, NULL, 7.950, NULL, 0, 24, NULL, '2020-05-19 07:56:28', '2020-05-19 07:56:28'),
(72, 11, 17, 19, NULL, 1, NULL, NULL, NULL, 413.750, NULL, 0, 24, NULL, '2020-05-19 07:59:43', '2020-05-19 07:59:43'),
(73, 11, 17, 21, NULL, 1, NULL, NULL, NULL, 912.300, NULL, 0, 24, NULL, '2020-05-19 08:01:34', '2020-05-19 08:01:34'),
(74, 11, 18, 19, NULL, 1, NULL, NULL, NULL, 179.850, NULL, 0, 24, NULL, '2020-05-19 08:02:51', '2020-05-19 08:02:51'),
(75, 11, 18, 24, NULL, 1, NULL, NULL, NULL, 216.550, NULL, 0, 24, NULL, '2020-05-19 08:03:24', '2020-05-19 08:03:24'),
(76, 11, 18, 21, NULL, 1, NULL, NULL, NULL, 1333.350, NULL, 0, 24, NULL, '2020-05-19 08:03:51', '2020-05-19 08:03:51'),
(77, 11, 18, 23, NULL, 1, NULL, NULL, NULL, 3655.650, NULL, 0, 24, NULL, '2020-05-19 08:04:36', '2020-05-19 08:04:36'),
(78, 10, 8, NULL, NULL, 1, 12, NULL, NULL, 120.000, NULL, 0, 22, NULL, '2020-05-19 17:00:00', '2020-05-20 02:33:43'),
(79, 10, 9, NULL, NULL, 1, 12, NULL, NULL, 30.000, NULL, 0, 22, NULL, '2020-05-20 02:50:42', '2020-05-20 02:50:42'),
(80, 10, 10, NULL, NULL, 1, 12, NULL, NULL, 30.000, NULL, 0, 22, NULL, '2020-05-20 02:51:49', '2020-05-20 02:51:49'),
(81, 10, 11, NULL, NULL, 1, 12, NULL, NULL, 360.000, NULL, 0, 22, NULL, '2020-05-20 02:52:13', '2020-05-20 02:52:13'),
(82, 10, 13, NULL, NULL, 1, 12, NULL, NULL, 600.000, NULL, 0, 22, NULL, '2020-05-19 17:00:00', '2020-05-20 03:01:14'),
(83, 10, 14, NULL, NULL, 1, 12, NULL, NULL, 810.000, NULL, 0, 22, NULL, '2020-05-20 02:58:01', '2020-05-20 02:58:01'),
(84, 10, 8, NULL, NULL, 1, 13, NULL, NULL, 253.000, NULL, 0, 22, NULL, '2020-05-20 03:29:56', '2020-05-20 03:29:56'),
(85, 10, 9, NULL, NULL, 1, 13, NULL, NULL, 100.000, NULL, 0, 22, NULL, '2020-05-20 03:30:14', '2020-05-20 03:30:14'),
(86, 10, 10, NULL, NULL, 1, 13, NULL, NULL, 100.000, NULL, 0, 22, NULL, '2020-05-20 03:30:34', '2020-05-20 03:30:34'),
(87, 10, 11, NULL, NULL, 1, 13, NULL, NULL, 100.000, NULL, 0, 22, NULL, '2020-05-20 03:30:57', '2020-05-20 03:30:57'),
(88, 10, 13, NULL, NULL, 1, 13, NULL, NULL, 99.000, NULL, 0, 22, NULL, '2020-05-20 03:31:31', '2020-05-20 03:31:31'),
(89, 11, 13, 22, NULL, 1, NULL, NULL, NULL, 629.550, NULL, 0, 24, NULL, '2020-05-20 07:24:43', '2020-05-20 07:24:43'),
(90, 10, 13, NULL, NULL, 1, 14, NULL, NULL, 360.000, NULL, 0, 22, NULL, '2020-05-20 07:36:26', '2020-05-20 07:36:26'),
(91, 10, 8, NULL, NULL, 1, 15, NULL, NULL, 540.000, NULL, 0, 22, NULL, '2020-05-20 08:42:16', '2020-05-20 08:42:16'),
(92, 10, 9, NULL, NULL, 1, 15, NULL, NULL, 1508.000, NULL, 0, 22, NULL, '2020-05-20 08:42:42', '2020-05-20 08:42:42'),
(93, 10, 11, NULL, NULL, 1, NULL, NULL, NULL, 720.000, NULL, 0, 22, NULL, '2020-05-20 09:11:11', '2020-05-20 09:11:11'),
(95, 10, 12, NULL, NULL, 11, 16, NULL, NULL, 500.000, NULL, 0, 24, NULL, '2020-06-20 03:23:34', '2020-06-20 03:23:34'),
(96, 10, 12, NULL, NULL, 11, 16, NULL, NULL, 540.000, NULL, 0, 24, NULL, '2020-06-19 17:00:00', '2020-06-20 03:26:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contract`
--

CREATE TABLE `contract` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contract_type_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `direction_id` int(11) DEFAULT NULL,
  `creator_id` int(11) DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` double(8,3) DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL,
  `total_amount` bigint(20) DEFAULT NULL,
  `payment_method` int(11) DEFAULT NULL,
  `delivered_quantity` double(8,3) DEFAULT NULL,
  `received_quantity` double(8,3) DEFAULT NULL,
  `expired_delivery` datetime DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contract`
--

INSERT INTO `contract` (`id`, `contract_type_id`, `customer_id`, `direction_id`, `creator_id`, `code`, `quantity`, `amount`, `total_amount`, `payment_method`, `delivered_quantity`, `received_quantity`, `expired_delivery`, `date_created`, `note`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(16, NULL, 22, 28, 11, '41/FCC', 1000.000, 390, NULL, 16, 880.000, NULL, '2020-07-31 00:00:00', '2020-06-15 00:00:00', NULL, 0, 0, '2020-06-19 17:00:00', '2020-06-20 03:26:30'),
(15, NULL, 19, 28, 1, 'FCCST07', 16913.000, NULL, NULL, 16, 4504.000, 4504.000, '2020-05-20 00:00:00', NULL, NULL, 0, 0, '2020-05-20 08:40:44', '2020-05-20 08:40:44'),
(14, NULL, 16, 28, 1, '9111FCCW', 720.000, NULL, NULL, 15, 360.000, 360.000, NULL, NULL, NULL, 0, 0, '2020-05-19 17:00:00', '2020-05-20 07:37:23'),
(12, NULL, 11, 26, 1, 'GS/MC/28', 2970.000, NULL, NULL, NULL, 1020.000, 1020.000, '2020-05-20 00:00:00', '2020-05-20 00:00:00', NULL, 0, 0, '2020-05-19 17:00:00', '2020-05-20 02:32:03'),
(13, NULL, 13, 27, 1, 'HZGS/22', 1040.000, NULL, NULL, NULL, 388.000, NULL, '2020-05-20 00:00:00', NULL, NULL, 0, 0, '2020-05-20 03:13:04', '2020-05-20 03:13:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `company_name`, `contact_name`, `phone`, `address`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(22, 'WEIFANG SHENGTAI MEDICINE CO., LTD.', NULL, NULL, NULL, 0, 0, '2020-06-20 02:50:12', '2020-06-20 02:50:12'),
(21, 'AGH', NULL, NULL, NULL, 0, 0, '2020-05-18 09:23:39', '2020-05-18 09:23:39'),
(20, 'ACECOOK', NULL, NULL, NULL, 0, 0, '2020-05-18 09:23:29', '2020-05-18 09:23:29'),
(19, 'FCCST', NULL, NULL, NULL, 0, 0, '2020-05-18 09:22:51', '2020-05-18 09:22:51'),
(18, 'FCCCT', NULL, NULL, NULL, 0, 0, '2020-05-18 09:22:34', '2020-05-18 09:22:34'),
(17, 'THC', NULL, NULL, NULL, 0, 0, '2020-05-18 09:22:14', '2020-05-18 09:22:14'),
(16, 'FCCW', NULL, NULL, NULL, 0, 0, '2020-05-18 09:22:02', '2020-05-18 09:22:02'),
(11, 'HL', NULL, NULL, NULL, 0, 0, '2020-05-18 09:21:00', '2020-05-18 09:21:00'),
(12, 'GS', NULL, NULL, NULL, 0, 0, '2020-05-18 09:21:08', '2020-05-18 09:21:08'),
(13, 'HZGS', NULL, NULL, NULL, 0, 0, '2020-05-18 09:21:21', '2020-05-18 09:21:21'),
(14, 'YDTN', NULL, NULL, NULL, 0, 0, '2020-05-18 09:21:35', '2020-05-18 09:21:35'),
(15, 'FCCPP', NULL, NULL, NULL, 0, 0, '2020-05-18 09:21:51', '2020-05-18 09:21:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `delivery`
--

CREATE TABLE `delivery` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_type_id` int(11) DEFAULT NULL,
  `notification_id` int(11) DEFAULT NULL,
  `contract_id` int(11) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `date_delivery` datetime DEFAULT NULL,
  `quantity_delivery` double(8,3) DEFAULT NULL,
  `amount_delivery` bigint(20) DEFAULT NULL,
  `date_delivered` datetime DEFAULT NULL,
  `quantity_delivered` double(8,3) DEFAULT NULL,
  `estimate_amount_receive` bigint(20) DEFAULT NULL,
  `estimate_date_amount_receive` datetime DEFAULT NULL,
  `amount_receive` bigint(20) DEFAULT NULL,
  `date_amount_receive` datetime DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `delivery`
--

INSERT INTO `delivery` (`id`, `code`, `delivery_type_id`, `notification_id`, `contract_id`, `bank_id`, `date_delivery`, `quantity_delivery`, `amount_delivery`, `date_delivered`, `quantity_delivered`, `estimate_amount_receive`, `estimate_date_amount_receive`, `amount_receive`, `date_amount_receive`, `note`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'cdSYTfShbV39WglS', NULL, NULL, 6, 17, '2020-05-15 00:00:27', 7420.000, 31964, '2020-05-15 00:00:27', 9830.000, 102, '2020-05-15 00:00:27', 8606, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, '0zjyxIfdjqilY6O0', NULL, NULL, 6, 17, '2020-05-15 00:00:27', 9029.000, 51086, '2020-05-15 00:00:27', 3242.000, 9284, '2020-05-15 00:00:27', 176, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 'lNpcweEfdyZ2ab6A', NULL, NULL, 2, 17, '2020-05-15 00:00:27', 3429.000, 41646, '2020-05-15 00:00:27', 3235.000, 7028, '2020-05-15 00:00:27', 3070, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 'OvnIT2WjpKuvMpZS', NULL, NULL, 3, 17, '2020-05-15 00:00:27', 2192.000, 73936, '2020-05-15 00:00:27', 9635.000, 1562, '2020-05-15 00:00:27', 4892, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 'CZBpb6CONOQsAGrt', NULL, NULL, 7, 17, '2020-05-15 00:00:27', 7430.000, 68919, '2020-05-15 00:00:27', 1682.000, 5524, '2020-05-15 00:00:27', 8467, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 'x1LEzLflZJd08Jfc', NULL, NULL, 8, 17, '2020-05-15 00:00:27', 9752.000, 74243, '2020-05-15 00:00:27', 7302.000, 7109, '2020-05-15 00:00:27', 4670, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, '72RfV4bStN29J8Fl', NULL, NULL, 1, 17, '2020-05-15 00:00:27', 2078.000, 20402, '2020-05-15 00:00:27', 3870.000, 9724, '2020-05-15 00:00:27', 4470, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, '7sKWHMOd1Kg7RAlS', NULL, NULL, 1, 17, '2020-05-15 00:00:27', 2768.000, 76096, '2020-05-15 00:00:27', 1696.000, 861, '2020-05-15 00:00:27', 1202, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, '0VCBAcMUGnKs5MxJ', NULL, NULL, 3, 17, '2020-05-15 00:00:27', 8506.000, 5224, '2020-05-15 00:00:27', 9929.000, 5015, '2020-05-15 00:00:27', 1077, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, '1qCRQkfinoosAst8', NULL, NULL, 3, 17, '2020-05-15 00:00:27', 4677.000, 36814, '2020-05-15 00:00:27', 6462.000, 735, '2020-05-15 00:00:27', 1840, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(11, '0lohTZiC9qHhVyUs', NULL, NULL, 8, 17, '2020-05-15 00:00:27', 7060.000, 3946, '2020-05-15 00:00:27', 5058.000, 3216, '2020-05-15 00:00:27', 7165, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(12, 'gd48ZfExxgWNuGuX', NULL, NULL, 10, 17, '2020-05-15 00:00:27', 7532.000, 70184, '2020-05-15 00:00:27', 7776.000, 3306, '2020-05-15 00:00:27', 7463, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(13, 'h1YCwcze7yPy3VJy', NULL, NULL, 4, 17, '2020-05-15 00:00:27', 9613.000, 44614, '2020-05-15 00:00:27', 2667.000, 1075, '2020-05-15 00:00:27', 1812, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(14, 'LXe9YPDFZFQrJ69H', NULL, NULL, 1, 17, '2020-05-15 00:00:27', 993.000, 36139, '2020-05-15 00:00:27', 4401.000, 4067, '2020-05-15 00:00:27', 277, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(15, '4MrfTLsOZX1P7E1A', NULL, NULL, 10, 17, '2020-05-15 00:00:27', 9617.000, 50666, '2020-05-15 00:00:27', 7947.000, 4210, '2020-05-15 00:00:27', 6314, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(16, 'pBw5WWVjiQRioAOr', NULL, NULL, 2, 17, '2020-05-15 00:00:27', 1039.000, 21690, '2020-05-15 00:00:27', 2740.000, 3686, '2020-05-15 00:00:27', 2913, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(17, '8ws2eTb5eIkpF4B3', NULL, NULL, 6, 17, '2020-05-15 00:00:27', 4747.000, 51945, '2020-05-15 00:00:27', 9539.000, 1842, '2020-05-15 00:00:27', 9142, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(18, '8ByR7ZDiUG4Zq5zG', NULL, NULL, 6, 17, '2020-05-15 00:00:27', 6667.000, 85735, '2020-05-15 00:00:27', 9928.000, 9689, '2020-05-15 00:00:27', 6271, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(19, 'jmFlL5UT70EWQDjW', NULL, NULL, 9, 17, '2020-05-15 00:00:27', 9479.000, 14857, '2020-05-15 00:00:27', 8035.000, 9840, '2020-05-15 00:00:27', 9750, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(20, 'SbzwjIyNMMUIRtN5', NULL, NULL, 4, 17, '2020-05-15 00:00:27', 7983.000, 38684, '2020-05-15 00:00:27', 1264.000, 6922, '2020-05-15 00:00:27', 1672, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(21, 'Q7do7kcK5iRFgS1h', NULL, NULL, 9, 17, '2020-05-15 00:00:27', 7181.000, 14907, '2020-05-15 00:00:27', 9597.000, 7098, '2020-05-15 00:00:27', 6951, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(22, 'XgZKqvVIITnO0B16', NULL, NULL, 4, 17, '2020-05-15 00:00:27', 3614.000, 95068, '2020-05-15 00:00:27', 1083.000, 6946, '2020-05-15 00:00:27', 3426, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(23, 'DZjGCUgHWAQhFFgl', NULL, NULL, 4, 17, '2020-05-15 00:00:27', 8578.000, 24104, '2020-05-15 00:00:27', 2623.000, 5672, '2020-05-15 00:00:27', 6144, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(24, 'FpbA3aWWUdCgkVJD', NULL, NULL, 10, 17, '2020-05-15 00:00:27', 4479.000, 52248, '2020-05-15 00:00:27', 9269.000, 191, '2020-05-15 00:00:27', 1915, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(25, 'QI7B74RpVv0hpGGn', NULL, NULL, 9, 17, '2020-05-15 00:00:27', 5063.000, 42496, '2020-05-15 00:00:27', 9821.000, 8999, '2020-05-15 00:00:27', 650, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(26, 'fdJS2PqOMdT5P1XR', NULL, NULL, 1, 17, '2020-05-15 00:00:27', 6799.000, 92228, '2020-05-15 00:00:27', 8457.000, 932, '2020-05-15 00:00:27', 4216, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(27, 'NzWeqGhEwkDMLN4y', NULL, NULL, 10, 17, '2020-05-15 00:00:27', 6226.000, 30331, '2020-05-15 00:00:27', 5820.000, 368, '2020-05-15 00:00:27', 7008, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(28, 'CAPAZLAhl4I6WvII', NULL, NULL, 8, 17, '2020-05-15 00:00:27', 1317.000, 73791, '2020-05-15 00:00:27', 1426.000, 5338, '2020-05-15 00:00:27', 9941, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(29, 'GtneaOeoXeEWiBzU', NULL, NULL, 6, 17, '2020-05-15 00:00:27', 3685.000, 49719, '2020-05-15 00:00:27', 1745.000, 1189, '2020-05-15 00:00:27', 3760, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(30, 'xVAYEwSx9J5DheJR', NULL, NULL, 5, 17, '2020-05-15 00:00:27', 6939.000, 65560, '2020-05-15 00:00:27', 4188.000, 9583, '2020-05-15 00:00:27', 4286, '2020-05-15 00:00:27', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(31, '1', NULL, NULL, 12, NULL, '2020-05-20 00:00:00', 120.000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 22, '2020-05-20 02:35:00', '2020-05-20 02:35:00'),
(32, '1', NULL, NULL, 16, 17, '2020-06-28 00:00:00', 380.000, NULL, '2020-06-28 00:00:00', 380.000, 148200, '2020-07-20 00:00:00', NULL, NULL, NULL, 0, 24, '2020-06-20 03:03:02', '2020-06-20 03:03:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `delivery_contract`
--

CREATE TABLE `delivery_contract` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `delivery_id` int(11) DEFAULT NULL,
  `contract_id` int(11) DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `delivery_log`
--

CREATE TABLE `delivery_log` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `delivery_id` int(11) DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `delivery_transport`
--

CREATE TABLE `delivery_transport` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `action_id` int(11) DEFAULT NULL,
  `delivery_id` int(11) DEFAULT NULL,
  `inventory_id` int(11) DEFAULT NULL,
  `transport_id` int(11) DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL,
  `amount_finish` bigint(20) DEFAULT NULL,
  `departure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `destination` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 23,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `driver`
--

CREATE TABLE `driver` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transport_type_id` int(11) DEFAULT NULL,
  `transport_vendor_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `driver`
--

INSERT INTO `driver` (`id`, `transport_type_id`, `transport_vendor_id`, `name`, `phone`, `description`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 19, 6, 'tài xế số 0', '204014670', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 19, 7, 'tài xế số 1', '760947010', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 19, 8, 'tài xế số 2', '125884537', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 19, 4, 'tài xế số 3', '624368810', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 19, 4, 'tài xế số 4', '575382849', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 18, 5, 'tài xế số 5', '480142142', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 20, 1, 'tài xế số 6', '719323077', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 20, 2, 'tài xế số 7', '700369085', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 21, 3, 'tài xế số 8', '993698991', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 20, 8, 'tài xế số 9', '763016154', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `inventory`
--

CREATE TABLE `inventory` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` double(8,3) NOT NULL DEFAULT 0.000,
  `current_quantity` double(8,3) NOT NULL DEFAULT 0.000,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detail` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `inventory`
--

INSERT INTO `inventory` (`id`, `user_id`, `code`, `type`, `name`, `address`, `quantity`, `current_quantity`, `description`, `detail`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(23, NULL, 'KHO - QN', 7, 'KHO QUY NHƠN', 'QUY NHƠN', 0.000, 0.000, NULL, '{\"12\":\"8186.8\",\"18\":\"3655.65\"}', 0, 0, '2020-05-18 02:41:47', '2020-05-18 02:41:47'),
(7, NULL, 'KHO-SL', 6, 'KHO SƠN LA', NULL, 4392.000, 4392.000, NULL, NULL, 0, 0, '2020-05-17 17:00:00', '2020-05-18 10:14:29'),
(8, NULL, 'KHO-QB', 6, 'KHO QUẢNG BÌNH', NULL, 4458.000, 4458.000, NULL, NULL, 0, 0, '2020-05-18 02:09:10', '2020-05-20 08:42:16'),
(9, NULL, 'KHO-QT', 6, 'KHO QUẢNG TRỊ', NULL, 5402.400, 5402.400, NULL, NULL, 0, 0, '2020-05-17 17:00:00', '2020-05-20 08:42:42'),
(10, NULL, 'KHO - H', 6, 'KHO HUẾ', NULL, 1498.800, 1498.800, NULL, NULL, 0, 0, '2020-05-18 02:11:09', '2020-05-20 03:30:34'),
(11, NULL, 'KHO - QN', 6, 'KHO QUẢNG NAM', NULL, 1641.000, 1641.000, NULL, NULL, 0, 0, '2020-05-18 02:11:28', '2020-05-20 09:11:11'),
(12, NULL, 'KHO - PY', 6, 'KHO PHÚ YÊN', NULL, 12535.490, 12535.490, NULL, NULL, 0, 0, '2020-05-18 02:11:54', '2020-06-20 03:26:59'),
(13, NULL, 'KHO - PT', 6, 'KHO PHÚ TÚC', NULL, 14788.050, 14788.050, NULL, NULL, 0, 0, '2020-05-18 02:12:18', '2020-05-20 07:36:26'),
(14, NULL, 'KHO - KT', 6, 'KHO KONTUM', NULL, 1198.800, 1198.800, NULL, NULL, 0, 0, '2020-05-18 02:12:36', '2020-05-20 02:58:01'),
(15, NULL, 'KHO - NT', 6, 'KHO NINH THUẬN', NULL, 4.150, 4.150, NULL, NULL, 0, 0, '2020-05-18 02:12:55', '2020-05-19 07:55:37'),
(16, NULL, 'KHO - BP', 6, 'KHO BÌNH PHƯỚC', NULL, 0.000, 0.000, NULL, NULL, 0, 0, '2020-05-18 02:13:11', '2020-05-19 07:56:28'),
(17, NULL, 'KHO - IA', 6, 'KHO IAPA', NULL, 6884.450, 6884.450, NULL, NULL, 0, 0, '2020-05-18 02:13:42', '2020-05-19 08:01:34'),
(18, NULL, 'KHO - KR', 6, 'KHO KON RẪY', NULL, 5584.000, 5584.000, NULL, NULL, 0, 0, '2020-05-18 02:16:56', '2020-05-19 08:04:36'),
(19, NULL, 'KHO - LS', 7, 'KHO THỊNH HIẾU', 'LẠNG SƠN', 2220.050, 2220.050, NULL, '{\"8\":\"2220.05\",\"9\":1040.5,\"10\":\"1094.45\",\"11\":\"2091.55\",\"12\":\"81.95\",\"13\":\"392.45\",\"14\":\"1058.6\",\"17\":\"413.75\",\"18\":\"179.85\"}', 0, 0, '2020-05-17 17:00:00', '2020-05-19 06:33:01'),
(20, NULL, 'KHO - 711', 7, 'KHO TÂN CẢNG 711', 'HỒ CHÍ MINH', 0.000, 0.000, NULL, '{\"15\":\"1035.35\",\"16\":\"7.85\"}', 0, 0, '2020-05-17 17:00:00', '2020-05-18 02:31:59'),
(21, NULL, 'KHO - TN', 7, 'KHO TÍN NGHĨA', 'HẢI PHÒNG', 0.000, 0.000, NULL, '{\"8\":\"101\",\"10\":\"269.95\",\"11\":\"42\",\"12\":\"812.5\",\"13\":\"661.9\",\"14\":\"1333.55\",\"17\":\"912.3\",\"18\":\"1333.35\"}', 0, 0, '2020-05-17 17:00:00', '2020-05-18 02:40:50'),
(22, NULL, 'KHO - VT3K', 7, 'KHO VẠN THÀNH 3K', 'HỒ CHÍ MINH', 0.000, 0.000, NULL, '{\"15\":\"2621.65\",\"16\":\"7.95\",\"13\":\"629.55\"}', 0, 0, '2020-05-17 17:00:00', '2020-05-18 02:26:32'),
(24, NULL, 'KHO - NN', 7, 'KHO NAM NINH', 'HẢI PHÒNG', 0.000, 0.000, NULL, '{\"11\":\"469.95\",\"12\":\"1037.55\",\"13\":\"274.95\",\"14\":\"402\",\"18\":\"216.55\"}', 0, 0, '2020-05-18 17:00:00', '2020-05-19 07:29:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(381, '2020_04_04_133730_create_table_role', 1),
(382, '2020_04_04_133804_create_table_permission', 1),
(383, '2020_04_04_133858_create_table_reference', 1),
(384, '2020_04_04_133917_create_table_inventory', 1),
(385, '2020_04_04_133930_create_table_action', 1),
(386, '2020_04_04_134000_create_table_contract', 1),
(387, '2020_04_04_134018_create_table_customer', 1),
(388, '2020_04_04_134039_create_table_delivery', 1),
(389, '2020_04_04_134057_create_table_delivery_contract', 1),
(390, '2020_04_04_134112_create_table_delivery_transport', 1),
(391, '2020_04_04_134132_create_table_transport', 1),
(392, '2020_04_04_134151_create_table_transport_vendor', 1),
(393, '2020_04_04_134305_create_table_driver', 1),
(394, '2020_04_04_134323_create_table_vehicle', 1),
(395, '2020_04_04_134342_create_table_notification', 1),
(396, '2020_04_04_134401_create_table_note', 1),
(397, '2020_04_04_134428_create_table_delivery_log', 1),
(398, '2020_04_04_134841_create_table_role_permission', 1),
(399, '2020_04_05_100120_create_table_user', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `note`
--

CREATE TABLE `note` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `table` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `record_id` int(11) DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action_type_id` int(11) DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permission`
--

CREATE TABLE `permission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `method` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `module` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `permission`
--

INSERT INTO `permission` (`id`, `method`, `module`, `slug`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'list', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 'edit', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 'soft_delete', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 'delete', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 'create', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 'trash', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 'restore', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 'detail', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 'list', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 'edit', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(11, 'soft_delete', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(12, 'delete', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(13, 'create', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(14, 'trash', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(15, 'restore', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(16, 'detail', 'contract', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(17, 'list', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(18, 'edit', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(19, 'soft_delete', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(20, 'delete', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(21, 'create', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(22, 'trash', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(23, 'restore', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(24, 'detail', 'action', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(25, 'list', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(26, 'edit', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(27, 'soft_delete', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(28, 'delete', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(29, 'create', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(30, 'trash', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(31, 'restore', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(32, 'detail', 'delivery', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(33, 'list', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(34, 'edit', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(35, 'soft_delete', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(36, 'delete', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(37, 'create', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(38, 'trash', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(39, 'restore', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(40, 'detail', 'delivery_transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(41, 'list', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(42, 'edit', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(43, 'soft_delete', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(44, 'delete', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(45, 'create', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(46, 'trash', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(47, 'restore', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(48, 'detail', 'driver', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(49, 'list', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(50, 'edit', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(51, 'soft_delete', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(52, 'delete', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(53, 'create', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(54, 'trash', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(55, 'restore', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(56, 'detail', 'inventory', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(57, 'list', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(58, 'edit', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(59, 'soft_delete', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(60, 'delete', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(61, 'create', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(62, 'trash', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(63, 'restore', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(64, 'detail', 'role_permission', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(65, 'list', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(66, 'edit', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(67, 'soft_delete', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(68, 'delete', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(69, 'create', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(70, 'trash', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(71, 'restore', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(72, 'detail', 'transport', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(73, 'list', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(74, 'edit', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(75, 'soft_delete', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(76, 'delete', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(77, 'create', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(78, 'trash', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(79, 'restore', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(80, 'detail', 'transport_vendor', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(81, 'list', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(82, 'edit', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(83, 'soft_delete', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(84, 'delete', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(85, 'create', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(86, 'trash', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(87, 'restore', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(88, 'detail', 'user', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(89, 'list', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(90, 'edit', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(91, 'soft_delete', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(92, 'delete', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(93, 'create', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(94, 'trash', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(95, 'restore', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(96, 'detail', 'vehicle', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(97, 'list', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(98, 'edit', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(99, 'soft_delete', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(100, 'delete', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(101, 'create', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(102, 'trash', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(103, 'restore', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(104, 'detail', 'customer', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(105, 'list', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(106, 'edit', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(107, 'soft_delete', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(108, 'delete', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(109, 'create', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(110, 'trash', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(111, 'restore', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(112, 'detail', 'report', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(113, 'list', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(114, 'edit', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(115, 'soft_delete', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(116, 'delete', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(117, 'create', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(118, 'trash', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(119, 'restore', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(120, 'detail', 'notification', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reference`
--

CREATE TABLE `reference` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `display_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `is_default` int(11) NOT NULL DEFAULT 0,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `reference`
--

INSERT INTO `reference` (`id`, `display_value`, `value`, `type`, `order`, `is_default`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Tin bột sắn', 'tinh-bot-san', 'product', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 'Tin bột sắn', 'tinh-bot-san', 'product-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 'PP-PE 20kg', '20', 'product-size', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 'PP-PE 50kg', '50', 'product-size', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 'Jumbo 850kg', '850', 'product-size', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 'Kho hàng', 'kho-hang', 'inventory-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 'Kho thuê', 'kho-thue', 'inventory-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 'Kho trung gian', 'kho-trung-gian', 'inventory-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 'Nhập', 'nhap', 'action-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 'Xuất', 'xuat', 'action-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(11, 'Luân chuyển', 'luan-chuyen', 'action-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(12, 'Huỷ', 'huy', 'action-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(13, 'Qua 1 đơn vị vận chuyển', 'mot-don-vi', 'delivery-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(14, 'Qua nhiều đơn vị vận chuyển', 'nhieu-don-vi', 'delivery-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(15, 'TT', 'tt', 'payment-method', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(16, 'LC', 'lc', 'payment-method', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(17, 'VCB', 'vcb', 'bank', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(18, 'Tàu lửa', 'tau-lua', 'transport-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(19, 'Xà lang', 'xa-lang', 'transport-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(20, 'Xe tải', 'xe-tai', 'transport-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(21, 'Container', 'container', 'transport-type', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(22, 'Vừa tạo', 'vua-tao', 'status', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(23, 'Đang thực hiện', 'dang-thuc-hien', 'status', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(24, 'Hoàn tất', 'hoan-tat', 'status', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(25, 'Huỷ', 'huy', 'status', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(26, 'Móng cái', 'mong-cai', 'direction', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(27, 'Lạng Sơn', 'lang-son', 'direction', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(28, 'Cont TPHCM', 'cont-hcm', 'direction', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(29, 'Cont Đà Nẵng', 'cont-da-nang', 'direction', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(30, 'Nội địa', 'noi-dia', 'direction', NULL, 0, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 'TBP Ban hang', 0, 0, '2020-06-16 02:48:52', '2020-06-16 03:02:32');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_permission`
--

CREATE TABLE `role_permission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `permission_id` int(11) DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role_permission`
--

INSERT INTO `role_permission` (`id`, `role_id`, `permission_id`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 1, 2, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 1, 3, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 1, 4, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 1, 5, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 1, 6, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 1, 7, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 1, 8, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 1, 9, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 1, 10, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(11, 1, 11, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(12, 1, 12, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(13, 1, 13, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(14, 1, 14, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(15, 1, 15, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(16, 1, 16, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(17, 1, 17, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(18, 1, 18, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(19, 1, 19, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(20, 1, 20, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(21, 1, 21, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(22, 1, 22, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(23, 1, 23, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(24, 1, 24, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(25, 1, 25, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(26, 1, 26, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(27, 1, 27, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(28, 1, 28, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(29, 1, 29, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(30, 1, 30, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(31, 1, 31, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(32, 1, 32, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(33, 1, 33, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(34, 1, 34, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(35, 1, 35, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(36, 1, 36, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(37, 1, 37, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(38, 1, 38, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(39, 1, 39, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(40, 1, 40, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(41, 1, 41, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(42, 1, 42, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(43, 1, 43, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(44, 1, 44, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(45, 1, 45, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(46, 1, 46, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(47, 1, 47, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(48, 1, 48, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(49, 1, 49, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(50, 1, 50, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(51, 1, 51, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(52, 1, 52, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(53, 1, 53, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(54, 1, 54, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(55, 1, 55, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(56, 1, 56, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(57, 1, 57, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(58, 1, 58, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(59, 1, 59, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(60, 1, 60, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(61, 1, 61, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(62, 1, 62, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(63, 1, 63, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(64, 1, 64, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(65, 1, 65, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(66, 1, 66, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(67, 1, 67, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(68, 1, 68, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(69, 1, 69, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(70, 1, 70, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(71, 1, 71, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(72, 1, 72, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(73, 1, 73, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(74, 1, 74, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(75, 1, 75, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(76, 1, 76, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(77, 1, 77, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(78, 1, 78, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(79, 1, 79, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(80, 1, 80, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(81, 1, 81, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(82, 1, 82, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(83, 1, 83, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(84, 1, 84, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(85, 1, 85, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(86, 1, 86, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(87, 1, 87, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(88, 1, 88, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(89, 1, 89, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(90, 1, 90, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(91, 1, 91, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(92, 1, 92, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(93, 1, 93, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(94, 1, 94, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(95, 1, 95, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(96, 1, 96, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(97, 1, 97, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(98, 1, 98, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(99, 1, 99, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(100, 1, 100, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(101, 1, 101, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(102, 1, 102, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(103, 1, 103, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(104, 1, 104, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(105, 1, 105, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(106, 1, 106, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(107, 1, 107, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(108, 1, 108, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(109, 1, 109, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(110, 1, 110, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(111, 1, 111, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(112, 1, 112, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(113, 1, 113, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(114, 1, 114, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(115, 1, 115, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(116, 1, 116, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(117, 1, 117, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(118, 1, 118, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(119, 1, 119, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(120, 1, 120, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(312, 2, 120, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(311, 2, 119, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(310, 2, 118, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(309, 2, 117, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(308, 2, 116, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(307, 2, 115, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(306, 2, 114, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(305, 2, 113, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(304, 2, 112, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(303, 2, 111, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(302, 2, 110, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(301, 2, 109, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(300, 2, 108, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(299, 2, 107, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(298, 2, 106, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(297, 2, 105, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(296, 2, 96, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(295, 2, 95, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(294, 2, 94, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(293, 2, 93, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(292, 2, 92, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(291, 2, 91, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(290, 2, 90, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(289, 2, 89, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(288, 2, 80, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(287, 2, 79, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(286, 2, 78, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(285, 2, 77, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(284, 2, 76, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(283, 2, 75, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(282, 2, 74, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(281, 2, 73, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(280, 2, 72, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(279, 2, 71, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(278, 2, 70, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(277, 2, 69, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(276, 2, 68, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(275, 2, 67, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(274, 2, 66, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(273, 2, 65, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(272, 2, 56, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(271, 2, 55, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(270, 2, 54, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(269, 2, 53, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(268, 2, 52, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(267, 2, 51, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(266, 2, 50, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(265, 2, 49, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(264, 2, 48, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(263, 2, 47, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(262, 2, 46, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(261, 2, 45, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(260, 2, 44, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(259, 2, 43, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(258, 2, 42, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(257, 2, 41, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(256, 2, 40, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(255, 2, 39, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(254, 2, 38, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(253, 2, 37, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(252, 2, 36, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(251, 2, 35, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(250, 2, 34, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(249, 2, 33, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(248, 2, 32, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(247, 2, 31, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(246, 2, 30, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(245, 2, 29, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(244, 2, 28, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(243, 2, 27, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(242, 2, 26, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(241, 2, 25, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(240, 2, 104, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(239, 2, 103, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(238, 2, 102, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(237, 2, 101, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(236, 2, 100, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(235, 2, 99, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(234, 2, 98, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(233, 2, 97, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(232, 2, 16, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(231, 2, 15, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(230, 2, 14, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(229, 2, 13, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(228, 2, 12, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(227, 2, 11, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(226, 2, 10, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(225, 2, 9, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(224, 2, 8, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(223, 2, 7, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(222, 2, 6, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(221, 2, 5, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(220, 2, 4, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(219, 2, 3, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(218, 2, 2, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32'),
(217, 2, 1, 0, 0, '2020-06-16 03:02:32', '2020-06-16 03:02:32');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transport`
--

CREATE TABLE `transport` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transport_type_id` int(11) DEFAULT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `transport_vendor_id` int(11) DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transport_vendor`
--

CREATE TABLE `transport_vendor` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `transport_vendor`
--

INSERT INTO `transport_vendor` (`id`, `name`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'công ty vận chuyển 0', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 'công ty vận chuyển 1', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 'công ty vận chuyển 2', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 'công ty vận chuyển 3', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 'công ty vận chuyển 4', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 'công ty vận chuyển 5', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 'công ty vận chuyển 6', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 'công ty vận chuyển 7', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 'công ty vận chuyển 8', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 'công ty vận chuyển 9', 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `note`, `remember_token`, `role_id`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 'User 0', 'user0@chien.com', '$2y$10$KPgZGoAgsxNyhfl46pVoIeLsmZYFnsoB3oNGITUAEicxof8HH8/Iy', '123123123', NULL, 1, 0, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(2, 'User 1', 'user1@chien.com', '$2y$10$KvQxKYEe1nDNkQdDvYpGdeyTaaVLAoFnVlv1rtNBSYSTJMv16y2RG', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(3, 'User 2', 'user2@chien.com', '$2y$10$/mv3kemp2d7chcbjaQZUuOyIGL0mZFofOv45JZ.5aUjMpCI.nwiMa', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(4, 'User 3', 'user3@chien.com', '$2y$10$AqD8PkucROBPELD0jEv49.ZBdzAw43o.pJOdOZ0TjgwnmDAh4IN5y', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(5, 'User 4', 'user4@chien.com', '$2y$10$PYSoQ7WeobrNyb/lqk4gI.yahqDd9z6kph5fr6ha3Vh7JNK/Nmx0m', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(6, 'User 5', 'user5@chien.com', '$2y$10$TFgB2Y/UDZEdaU9HTgDEZeEzRbU4vNtG9OykcmYMHcmedQ3/UoKWy', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(7, 'User 6', 'user6@chien.com', '$2y$10$/zBDscd3fLsbpUT7jb3yt.cC51PgbGjcQOWuKZJ8rKqBQII3G8Qla', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(8, 'User 7', 'user7@chien.com', '$2y$10$a5//mUu0H2mh0ekoOuYrX.Ns3rsNnJXu9glYBhUMyB1U/GY.krAAy', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(9, 'User 8', 'user8@chien.com', '$2y$10$SAB4Sx/dKRYh6/vr4R.OBulzhm0n59ysr3TXp2sK9fYC6F5z6bv0m', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:26', '2020-05-14 17:00:26'),
(10, 'User 9', 'user9@chien.com', '$2y$10$oW5Vd6IbW0AxP4RU/9FISuCeUA/7Yw7M3SMb3BR11RVdMswnwKzua', '123123123', NULL, NULL, 1, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(11, NULL, 'phuong', '$2y$10$hm9JIPQmXN6iFxjoT8e7iObx6tleQ0wey7I.UarL47qLNZ7jZhs/C', 't5MoOS', NULL, 2, 0, 0, '2020-06-15 17:00:00', '2020-06-16 03:15:21'),
(12, NULL, 'Mr.Phuong', '$2y$10$HEwrZOuchMg6pm37V3avauQFlqOSOBu12EDDMj/xpfl1h/ebvvkey', 'uM9FBy', NULL, 1, 0, 0, '2020-06-16 02:52:53', '2020-06-16 02:52:53');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vehicle`
--

CREATE TABLE `vehicle` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `transport_type_id` int(11) DEFAULT NULL,
  `transport_vendor_id` int(11) DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invalid` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `vehicle`
--

INSERT INTO `vehicle` (`id`, `transport_type_id`, `transport_vendor_id`, `code`, `name`, `description`, `invalid`, `status`, `created_at`, `updated_at`) VALUES
(1, 21, 6, 'qTKIsZ', 'xe tải 0', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(2, 21, 10, 'F2R1MQ', 'xe tải 1', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(3, 18, 6, '957GyO', 'xe tải 2', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(4, 21, 9, '7HMn8r', 'xe tải 3', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(5, 21, 1, 'yteBh5', 'xe tải 4', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(6, 21, 3, 'oHqKA0', 'xe tải 5', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(7, 19, 1, 'mCXF3f', 'xe tải 6', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(8, 21, 1, 'Unj5pG', 'xe tải 7', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(9, 21, 1, 'jjaDzA', 'xe tải 8', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27'),
(10, 21, 2, 'X1cGFE', 'xe tải 9', NULL, 0, 0, '2020-05-14 17:00:27', '2020-05-14 17:00:27');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `delivery_contract`
--
ALTER TABLE `delivery_contract`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `delivery_log`
--
ALTER TABLE `delivery_log`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `delivery_transport`
--
ALTER TABLE `delivery_transport`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `reference`
--
ALTER TABLE `reference`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `transport_vendor`
--
ALTER TABLE `transport_vendor`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Chỉ mục cho bảng `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `action`
--
ALTER TABLE `action`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT cho bảng `contract`
--
ALTER TABLE `contract`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `delivery`
--
ALTER TABLE `delivery`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `delivery_contract`
--
ALTER TABLE `delivery_contract`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `delivery_log`
--
ALTER TABLE `delivery_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `delivery_transport`
--
ALTER TABLE `delivery_transport`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `driver`
--
ALTER TABLE `driver`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=400;

--
-- AUTO_INCREMENT cho bảng `note`
--
ALTER TABLE `note`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `permission`
--
ALTER TABLE `permission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT cho bảng `reference`
--
ALTER TABLE `reference`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=313;

--
-- AUTO_INCREMENT cho bảng `transport`
--
ALTER TABLE `transport`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `transport_vendor`
--
ALTER TABLE `transport_vendor`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
