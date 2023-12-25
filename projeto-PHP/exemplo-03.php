<?php

$conn = new PDO("mysql:host=localhost;dbname=db1","root","");
if($conn == mysqli_connect_error()):
    return "Não foi possivel conectar a base de Dados" . mysqli_connect_error();
endif;

echo "<center> <b> Connect has been Sucessfully! </b> </center>";





/* model database:
CREATE DATABASE register_db;
USE register_db;

CREATE TABLE table_users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(40) NOT NULL,
endereco VARCHAR(30) NOT NULL,
numero INT(4) NOT NULL,
dtcadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
birth_date VARCHAR(6) NOT NULL,
idade INT(2) NOT NULL
);

SELECT * FROM table_users;

INSERT INTO table_users (nome, endereco, numero, birth_date, idade) VALUES ('Andre','Rua Paes de Barros', 133,27-02-1998, 50);
INSERT INTO table_users (nome, endereco, numero) VALUES ('Erica','Rua Enersto Fogo', 200);
DELETE from table_users WHERE id = 1;

TRUNCATE TABLE table_users;

DROP DATABASE register_db;


# ATER TABLE  table_users ADD nome  VARCHAR(30);
# ALTER TABLE table_users ADD email VARCHAR(20);
# ALTER TABLE table_users ADD cep   VARCHAR(9);
# ALTER TABLE table_users ADD cidade VARCHAR(15);
# ALTER TABLE table_users ADD endereco VARCHAR(40);

*/





?>