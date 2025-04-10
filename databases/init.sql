/*
Creating database
*/

create database maikar;

use maikar;

/*
Creating database structure
*/

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
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `km_current` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `brand` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,1,'Toyota Corolla',78200,2018,'2025-04-08 17:07:37',NULL),(2,2,'Civic',NULL,2022,'2025-04-08 17:07:37','Honda'),(3,3,'Volkswagen Golf',90500,2017,'2025-04-08 17:07:37',NULL),(4,4,'Chevrolet Onix',15300,2022,'2025-04-08 17:07:37',NULL),(5,5,'Ford Ka',120500,2015,'2025-04-08 17:07:37',NULL),(8,6,'Golf',50,2016,'2025-04-09 15:26:25','Volkswagen'),(12,6,'Civic',12,2022,'2025-04-10 15:05:25','Honda');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
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
-- Table structure for table `maintenance`
--

DROP TABLE IF EXISTS `maintenance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maintenance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `car_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `next_revision` date DEFAULT NULL,
  `notes` text,
  PRIMARY KEY (`id`),
  KEY `car_id` (`car_id`),
  CONSTRAINT `maintenance_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maintenance`
--

LOCK TABLES `maintenance` WRITE;
/*!40000 ALTER TABLE `maintenance` DISABLE KEYS */;
INSERT INTO `maintenance` VALUES (1,1,'2024-12-15','2025-06-15','Troca de óleo e alinhamento'),(2,2,'2025-03-10','2025-09-10','Revisão geral dos 45k km'),(3,3,'2025-01-20','2025-07-20','Troca do kit de embreagem'),(4,8,'2025-04-11','2025-04-26','Troca de óleo e filtro de ar'),(5,8,'2024-11-30','2025-05-30','Revisão completa'),(6,NULL,'2024-04-01',NULL,NULL),(7,NULL,'2024-04-01','2024-10-01','Algum texto de descrição'),(8,NULL,'2024-04-01','2024-10-01','Algum texto de descrição'),(9,NULL,'2024-04-01','2024-10-01','Algum texto de descrição'),(10,NULL,'2024-04-01','2024-10-01','Algum texto de descrição'),(12,8,'2024-04-01','2024-10-01','Revision at mileage 90000'),(13,8,'2025-04-11','2027-06-10','KM TESTE');
/*!40000 ALTER TABLE `maintenance` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 17:36:07


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
-- Table structure for table `maintenance_parts`
--

DROP TABLE IF EXISTS `maintenance_parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maintenance_parts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maintenance_id` int DEFAULT NULL,
  `part_name` varchar(100) DEFAULT NULL,
  `part_code` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `quantity` int DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `maintenance_id` (`maintenance_id`),
  CONSTRAINT `maintenance_parts_ibfk_1` FOREIGN KEY (`maintenance_id`) REFERENCES `maintenance` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maintenance_parts`
--

LOCK TABLES `maintenance_parts` WRITE;
/*!40000 ALTER TABLE `maintenance_parts` DISABLE KEYS */;
INSERT INTO `maintenance_parts` VALUES (1,1,'Óleo 5W30','OL5030',120.00,1),(2,1,'Filtro de óleo','FILT001',35.00,1),(3,2,'Filtro de ar','FILT002',45.00,1),(4,2,'Pastilha de freio traseira','PAST002',95.00,1),(5,3,'Kit de embreagem completo','KITEMB01',850.00,1),(6,4,'Filtro de ar esportivo','FILTESP',60.00,1),(7,4,'Óleo sintético 5W40','OL0540',49.00,4),(8,5,'Correia dentada','COR001',210.00,1),(9,5,'Velas de ignição','VEL001',80.00,4);
/*!40000 ALTER TABLE `maintenance_parts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 17:36:08



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
-- Table structure for table `maintenance_services`
--

DROP TABLE IF EXISTS `maintenance_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maintenance_services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `maintenance_id` int DEFAULT NULL,
  `service_description` text,
  `cost` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `maintenance_id` (`maintenance_id`),
  CONSTRAINT `maintenance_services_ibfk_1` FOREIGN KEY (`maintenance_id`) REFERENCES `maintenance` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maintenance_services`
--

LOCK TABLES `maintenance_services` WRITE;
/*!40000 ALTER TABLE `maintenance_services` DISABLE KEYS */;
INSERT INTO `maintenance_services` VALUES (1,1,'Troca de óleo e filtro',70.00),(2,1,'Alinhamento',60.00),(3,2,'Revisão geral',150.00),(4,2,'Troca das pastilhas',80.00),(5,3,'Troca do kit de embreagem',300.00),(6,4,'Troca do óleo',60.00),(8,5,'Revisão completa + correia',250.00),(9,5,'Troca das velas de ignição',40.00),(12,4,'teste servico',55.00);
/*!40000 ALTER TABLE `maintenance_services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 17:36:09
