CREATE TABLE `paciente` (
  `data_nascimento` date DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `bairro` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `ddd` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `n` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci