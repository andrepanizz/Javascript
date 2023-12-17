<?php
$server = "mysql:dbname=dbphp7;";
$hostname = "host=localhost;";
$user = "root";
$password = "root";
$port = "3307";

$conn = new PDO("$server" . "$hostname", $user, $password);

#stmt será utilizado desta forma:

$stmt = $conn->prepare("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES ('user', 'gfdgs')");





?>