-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: noteapp
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  `color` varchar(15) DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Work','#badc58','paper'),(2,'Learn','#74b9ff','bookmarks'),(3,'Personal','#fd79a8','person'),(4,'Wishlist','#fdcb6e','star-half');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `note` varchar(50) DEFAULT NULL,
  `created_at` varchar(50) DEFAULT NULL,
  `updated_at` varchar(45) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'Filosofi Rokok','All About Nyebat','2019-06-21 10:24:22','2019-06-21 10:29:13',1),(3,'Hungry Marry','When Marry to be a Hungry Person','2019-06-21 10:25:05','2019-06-21 10:29:13',1),(4,'Kancil Kasarunging','Kancil just a animal who use sarung in their life','2019-06-21 10:25:16','2019-06-21 10:29:13',1),(5,'Hackshaw Ridge','medic without a gun just a medic kit','2019-06-21 10:26:24','2019-06-21 10:29:14',2),(6,'spiderman: spider universe','spiderman with other universe','2019-06-21 10:26:21','2019-06-21 10:29:14',2),(7,'spongebob','just a sponge who live in pineapple','2019-06-21 10:26:17','2019-06-21 10:29:14',2),(8,'Sharp 21\"','Just a normal tv','2019-06-21 10:26:13','2019-06-21 10:29:14',3),(9,'Panasonic 100\"','Just a Huge TV','2019-06-21 10:26:10','2019-06-21 10:29:14',3),(10,'Hawai P30 Beta','beta smatphone','2019-06-21 10:25:42','2019-06-21 10:29:14',3),(11,'nopia x10','phone with vibranium','2019-06-21 10:25:46','2019-06-21 10:29:14',3),(12,'RedBerry Sagitarius','smartphone who can recycle','2019-06-21 10:25:49','2019-06-21 10:29:14',3),(13,'Life Of Walter Mighty','A Man Life who can change their life','2019-06-21 10:26:00','2019-06-21 10:29:14',2),(14,'Dance Barbell','Who Touch this burble become proffesional dancer','2019-06-21 10:26:04','2019-06-21 10:29:14',4),(15,'Treat Wall','The Wall Who Can Treat you Better','2019-06-21 10:26:07','2019-06-21 10:29:14',4),(16,'Tamagochan','Device with a Egg shape','2019-06-21 10:26:50','2019-06-21 10:29:14',3),(17,'Samsul Axik','SmartPhone with Happy face','2019-06-21 10:26:51','2019-06-21 10:29:15',3),(18,'Kulapanik','Book with Panic cover','2019-06-21 10:26:51','2019-06-21 10:29:15',1),(19,'CatMan','Cat With Man Face','2019-06-21 10:26:51','2019-06-21 10:29:15',2),(20,'Jin Tomang','Jin who live in a Ceret','2019-06-21 10:25:24','2019-06-21 10:29:15',1),(21,'BallGadot','Ball with galgadot Face','2019-06-21 10:25:29','2019-06-21 10:29:15',4),(22,'Rocky','the adventure of patrick start pet','2019-06-21 10:25:34','2019-06-21 10:29:15',2),(31,'notes cek','cek the note from postman','2019-06-22 10:19:12','2019-06-22 10:19:12',4),(32,NULL,NULL,'2019-06-22 10:59:28','2019-06-22 10:59:28',NULL),(33,'Add notes','Add notes cek','2019-07-07 17:59:19','2019-07-07 17:59:19',2),(36,'Add notes','Add note cek','2019-07-07 18:02:34','2019-07-07 18:02:34',2),(37,'Note aded','Ading note wit mote des\nD\nD\nDd\nD\nD\nD\nD\nD','2019-07-07 20:59:32','2019-07-07 20:59:32',4);
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-07 21:10:48
