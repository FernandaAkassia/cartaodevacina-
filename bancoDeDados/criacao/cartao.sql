CREATE TABLE `cartao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paciente` int DEFAULT NULL,
  `profissional` int DEFAULT NULL,
  `ubs` int DEFAULT NULL,
  `vacina` int DEFAULT NULL,
  `lote` varchar(45) DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_paciente_idx` (`paciente`),
  KEY `fk_id_profissional_idx` (`profissional`),
  KEY `fk_id_ubs_idx` (`ubs`),
  KEY `fk_id_vacina_idx` (`vacina`),
  CONSTRAINT `fk_id_paciente` FOREIGN KEY (`paciente`) REFERENCES `paciente` (`id`),
  CONSTRAINT `fk_id_profissional` FOREIGN KEY (`profissional`) REFERENCES `profissional` (`id`),
  CONSTRAINT `fk_id_ubs` FOREIGN KEY (`ubs`) REFERENCES `ubs` (`id`),
  CONSTRAINT `fk_id_vacina` FOREIGN KEY (`vacina`) REFERENCES `vacina` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci