-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.15

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brands` (
  `idBrands` int(11) NOT NULL AUTO_INCREMENT,
  `idSupplier` int(11) NOT NULL,
  `nameBrand` varchar(45) NOT NULL,
  PRIMARY KEY (`idBrands`),
  UNIQUE KEY `nameBrand_UNIQUE` (`nameBrand`),
  KEY `fk_Brands_Supplier1_idx` (`idSupplier`),
  CONSTRAINT `fk_Brands_Supplier1` FOREIGN KEY (`idSupplier`) REFERENCES `supplier` (`idSupplier`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,1,'dados'),(2,1,'espadas'),(3,2,'fosforos');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `clients` (
  `idClients` int(11) NOT NULL AUTO_INCREMENT,
  `nameClient` varchar(45) DEFAULT NULL,
  `addressClient` varchar(45) DEFAULT NULL,
  `phoneClient` varchar(45) DEFAULT NULL,
  `emailClient` varchar(45) DEFAULT NULL,
  `dateRegisterClient` date DEFAULT NULL,
  `recommendedByIdClient` int(11) DEFAULT NULL,
  PRIMARY KEY (`idClients`),
  KEY `fk_Clients_Clients1_idx` (`recommendedByIdClient`),
  CONSTRAINT `fk_Clients_Clients1` FOREIGN KEY (`recommendedByIdClient`) REFERENCES `clients` (`idClients`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'gatitos','daigonal','4545454','gasadad','2019-03-20',NULL),(2,'higos','llacuna','5454545','fsdgrgrg@','2019-03-21',1),(3,'iglues','roc boronat','787878','opjkfjnk@','2019-03-22',2),(4,'jojojorge','falcon','45454545','jokokok','2019-03-23',NULL);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frame`
--

DROP TABLE IF EXISTS `frame`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `frame` (
  `idFrame` int(11) NOT NULL AUTO_INCREMENT,
  `typeOfFrame` varchar(45) NOT NULL,
  PRIMARY KEY (`idFrame`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frame`
--

LOCK TABLES `frame` WRITE;
/*!40000 ALTER TABLE `frame` DISABLE KEYS */;
INSERT INTO `frame` VALUES (1,'pasta'),(2,'metalico'),(3,'flotante');
/*!40000 ALTER TABLE `frame` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `glasses`
--

DROP TABLE IF EXISTS `glasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `glasses` (
  `idGlasses` int(11) NOT NULL AUTO_INCREMENT,
  `idBrands` int(11) NOT NULL,
  `idFrame` int(11) NOT NULL,
  `presctiptionGlasses` varchar(45) NOT NULL,
  `frameColorGlasses` varchar(45) NOT NULL,
  `lensColorGlasses` varchar(45) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idGlasses`),
  KEY `fk_Glasses_Brands1_idx` (`idBrands`),
  KEY `fk_Glasses_Frame1_idx` (`idFrame`),
  CONSTRAINT `fk_Glasses_Brands1` FOREIGN KEY (`idBrands`) REFERENCES `brands` (`idBrands`),
  CONSTRAINT `fk_Glasses_Frame1` FOREIGN KEY (`idFrame`) REFERENCES `frame` (`idFrame`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `glasses`
--

LOCK TABLES `glasses` WRITE;
/*!40000 ALTER TABLE `glasses` DISABLE KEYS */;
INSERT INTO `glasses` VALUES (1,1,1,'as','asad','asasd',56.25),(2,2,1,'ferf','gtas','wetr',54.00),(3,2,2,'gtg','gtrr','trwe',12.00);
/*!40000 ALTER TABLE `glasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `invoice` (
  `idInvoice` int(11) NOT NULL AUTO_INCREMENT,
  `idClients` int(11) NOT NULL,
  `soldByEmployee` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idInvoice`),
  KEY `fk_Invoice_Clients1_idx` (`idClients`),
  CONSTRAINT `fk_Invoice_Clients1` FOREIGN KEY (`idClients`) REFERENCES `clients` (`idClients`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,1,'pepe'),(2,2,'kiko'),(3,2,'lola');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lineinvoice`
--

DROP TABLE IF EXISTS `lineinvoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `lineinvoice` (
  `idLineInvoice` int(11) NOT NULL AUTO_INCREMENT,
  `idGlasses` int(11) NOT NULL,
  `idInvoice` int(11) NOT NULL,
  PRIMARY KEY (`idLineInvoice`),
  KEY `fk_LineInvoice_Glasses1_idx` (`idGlasses`),
  KEY `fk_LineInvoice_Invoice1_idx` (`idInvoice`),
  CONSTRAINT `fk_LineInvoice_Glasses1` FOREIGN KEY (`idGlasses`) REFERENCES `glasses` (`idGlasses`),
  CONSTRAINT `fk_LineInvoice_Invoice1` FOREIGN KEY (`idInvoice`) REFERENCES `invoice` (`idInvoice`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineinvoice`
--

LOCK TABLES `lineinvoice` WRITE;
/*!40000 ALTER TABLE `lineinvoice` DISABLE KEYS */;
INSERT INTO `lineinvoice` VALUES (1,1,1),(2,1,2),(3,2,2),(4,3,3);
/*!40000 ALTER TABLE `lineinvoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `supplier` (
  `idSupplier` int(11) NOT NULL AUTO_INCREMENT,
  `nameSupplier` varchar(45) DEFAULT NULL,
  `streetSupplier` varchar(45) DEFAULT NULL,
  `addressNumberSupplier` varchar(45) DEFAULT NULL,
  `addressFloorSupplier` varchar(45) DEFAULT NULL,
  `addressDoorSupplier` varchar(45) DEFAULT NULL,
  `citySupplier` varchar(45) DEFAULT NULL,
  `zipcodeSupplier` varchar(8) DEFAULT NULL,
  `countrySupplier` varchar(45) DEFAULT NULL,
  `phoneSupplier` varchar(45) DEFAULT NULL,
  `faxSupplier` varchar(45) DEFAULT NULL,
  `nifSupplier` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSupplier`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'arco','roc boronat','123','2','1','bcn','0805','cat','988989-54','','454545t'),(2,'barco','llacuna','345','3','2','mad','10259','mad','987654-45','65542','987221'),(3,'casita','diagonal','456','4','4','sev','22058','sev','7845212-7',NULL,'562411t');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-28 10:44:52
