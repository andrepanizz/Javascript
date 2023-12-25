<?php

$conn = new PDO("mysql:host=localhost;dbname=db1","root","");
if($conn == mysqli_connect_error()):
    return "Não foi possivel conectar a base de Dados" . mysqli_connect_error();
endif;

echo "<center> <b> Connect has been Sucessfully! </b> </center>";






/*
CREATE DATABASE db1;
USE db1;
CREATE TABLE user(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dtcadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
nome VARCHAR(40) NOT NULL,
endereco VARCHAR(50) NOT NULL,
numero INT(5),
data_nasc VARCHAR(8),
data_admissao VARCHAR(10),
cpf VARCHAR(12),
matricula INT(15),
salario FLOAT(15),
ctps_n° INT(20)
);
SELECT * FROM user;

# ATER TABLE  table_users ADD nome  VARCHAR(30);
# ALTER TABLE table_users ADD email VARCHAR(20);
# ALTER TABLE table_users ADD cep   VARCHAR(9);
# ALTER TABLE table_users ADD cidade VARCHAR(15);
# ALTER TABLE table_users ADD endereco VARCHAR(40);

*/

?>