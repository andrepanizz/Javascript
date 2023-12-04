<?php
// All about Arrays:

echo "Vamos inicializar com um Array Vazio, para dar exemplos:" . "<br>";

$frutas0 = [];
$frutas1 = array();
/* @andrepanizz Iniciaremos com array_push que adiciona itens no final do array; */
array_push($frutas0, "banana","abacaxi","morango","laranja");

// Mostrar o que tem dentro do array "frutas0";
echo '<hr>';
asort($frutas0);
foreach($frutas0 as $value){
    echo "=> ". $value . "<br>";
          
}
echo "<hr>";

/* Mostraremos o que tem dentro do array frutas1 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


?>