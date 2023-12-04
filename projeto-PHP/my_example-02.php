<?php
// All about Arrays:

echo "Vamos inicializar com um Array Vazio, para dar exemplos:" . "<br>";
is_string($separador);
$frutas0 = [];
$frutas1 = array();
/* @andrepanizz Iniciaremos com array_push que adiciona itens no final do array; */
array_push($frutas0, "banana","abacaxi","morango","laranja");
array_push($frutas1, "melancia","uva","manga","maracuja");
echo '<hr>';
asort($frutas0);  // DesOrdenada.
sort($frutas1);   // Ordenada.

foreach($frutas0 as $key => $value){
    // Mostrar o que tem dentro do array "frutas0";
    if($frutas0 === 'string'):
    echo "Indice" . $key . " <b>nome_da_fruta</b> ". ucfirst($value) . "<br>";
    else:
        foreach($frutas1 as $key => $val):
            echo "Indice" . $key . " <b>nome_da_fruta:</b> ".ucwords($val) . "<br>";
            
        endforeach;
    endif;          
}

echo "<hr>";

/* Mostraremos o que tem dentro do array frutas1 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


?>