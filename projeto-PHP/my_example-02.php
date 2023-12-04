<?php
// All about Arrays:

echo "Vamos inicializar com um Array Vazio, para dar exemplos:" . "<br>";

$frutas0 = [];
$nomes1 = array();
/* @andrepanizz Iniciaremos com array_push que adiciona itens no final do array; */
array_push($frutas0, "banana","abacaxi","morango","laranja");
array_push($nomes1, "andre","erica","david","melissa");
echo '<hr>';

asort($frutas0);  // DesOrdenada.
sort($nomes1);   // Ordenada.
foreach($frutas0 as $key => $value){
    // Mostrar o que tem dentro do array "frutas0";

    if(isset($frutas0)):
    echo "Indice" . $key . " <b>nome_da_fruta</b> ". ucfirst($value) . "<br>";
    
    else:
        //Se não existir, remove um item do array $nomes1;
        echo strtoupper("O array 'nomes1' foi removido o ultima posição! " . "Posição sem a remoção:" . count($nomes1));
        array_pop($nomes1, "melissa");
        
        foreach($nomes1 as $value):
            echo "Numero de posições:". count($value) . "<br>";
            
        endforeach;
    endif;          
}
/**@andrepanizz Agora iremos remover deste array o primeiro elemento dele utilizando array_shift(); */


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


?>