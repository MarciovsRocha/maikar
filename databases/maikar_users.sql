-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 147.93.33.150    Database: maikar
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Vinicius Silva','vinicius@example.com','$2b$10$fLyn3Vem35dAuQjpR75vKuiEGrDjTrjvXy8DPxQkT0/kFBUzJdsUy','2025-04-08 17:07:37'),(2,'Carla Mendes','carla@example.com','$2b$10$UuvSZgIq5yLDwz5OLnXjDuUTAim4i1IbgtaJdWRRbYjFXPuCMHRyu','2025-04-08 17:07:37'),(3,'Lucas Oliveira','lucas@example.com','$2b$10$Z9pMXU6bmyCxWY9GsCz0e.MWh6yFPcYM2eL2epfP30QmD4QxO2HCW','2025-04-08 17:07:37'),(4,'Fernanda Costa','fernanda@example.com','$2b$10$zKDkEKskXvtcnsBPabIh..OAbUEX998LeDdG43sdZrz1wthdYioYy','2025-04-08 17:07:37'),(5,'Bruno Souza','bruno@example.com','$2b$10$17d12eD0PnPkFp/osb2JxO9qEeZnVF0Rr9vAGzVqdncrm/B/gFAli','2025-04-08 17:07:37'),(6,'Marcio Vinicius','marcio.souza@tecpuc.com.br','$2b$10$WBMlKInbmdRg65KzfoUL7eHKzkhRdRpjjOwfAznOW8Kfy9M8D60tG','2025-04-08 20:28:52'),(7,'Zé Ruela','ze_ruela@capivaradev.com','$2b$10$pHswbIx3akChFPlL56o0NujIkelmgeiYnPn2XnqCvTAbDGBMG6UGu','2025-04-09 15:23:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 17:36:10
