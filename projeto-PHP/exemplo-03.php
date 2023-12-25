<?php

$conn = new PDO("mysql:host=localhost;dbname=db1","root","");
if($conn == mysqli_connect_error()):
    return "Não foi possivel conectar a base de Dados" . mysqli_connect_error();
endif;

echo "<center> <b> Connect has been Sucessfully! </b> </center>";






/*

*/

?>