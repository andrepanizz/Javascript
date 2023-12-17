<?php
$server = "mysql:dbname=dbphp7;";
$hostname = "host=localhost;";
$user = "root";
$password = "root";
$port = "3307";

$conn = new PDO("mysql:dbname=dbphp7;host=localhost","root","root");

#stmt será utilizado desta forma:



$stmt = $conn->prepare("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES (':LOGIN, :PASSWORD')");



# passando como se fosse um ID, desta forma acima:
$login = "jose";
$senha = "123456";

# utilizando o BindParam usando no Statement para cada parametro que temos aqui abaixo:

$stmt->bindParam(':LOGIN', $login);
$stmt->bindParam('PASSWORD',$senha);

# Executaremos isto para rodar:
$stmt->execute();

echo "Inserido OK";


?>