<?php
/* Agora trabalhando com Arrays: 

Um exemplo pratico que vimos em aula : */

$my_first = array();
$my_second = array();
// adicionando itens ao array();
array_push($my_first, $fruta_1, $fruta_2, $fruta_3);
array_push($my_second, $fruta_4, $fruta_5, $fruta_6);
// Itens para adicionar ao array:
$fruta_1 = "abacaxi";
$fruta_2 = "banana";
$fruta_3 = "melão";
$fruta_4 = "Uva";
$fruta_5 = "carambola";
$fruta_6 = "limão";

//Mostrando os valores do meu array:
var_dump($my_first) . "<br>";
var_dump($my_second) . "<br>";

// O exemplo acima reproduzira:
/*             
                */

$array = array(1, 1, 1, 1,  1, 8 => 1,  4 => 1, 19, 3 => 13);
print_r($array);

echo "<br>";

// Mais exemplos:
$frutas = array (
    "frutas"  => array("a" => "laranja", "b" => "banana", "c" => "maçã"),
    "numeros" => array(1, 2, 3, 4, 5, 6),
    "buracos" => array("primeiro", 5 => "segundo", "terceiro")
);

$firstquarter = array(1 => 'Janeiro', 'Fevereiro', 'Março');
print_r($firstquarter);

$foo = array('bar' => 'baz');
echo "Hello {$foo['bar']}!"; // Hello baz!

$a = [1, 2, 3, 4];
    print_r($a);


     $a = ['one' => 1, 'two' => 2, 'three' => 3, 'four' => 4];
    print_r($a);


// exemplo da documentação do PHP:
function arrayToSelect($option, $selected = '', $optgroup = NULL)
{
    $returnStatement = '';

    if ($selected == '') {
        $returnStatement .= '<option value="" selected="selected">Select one...</option>';
    }

    if (isset($optgroup)) {
        foreach ($optgroup as $optgroupKey => $optgroupValue) {
            $returnStatement .= '<optgroup label="' . $optgroupValue . '">';

            foreach ($option[$optgroupKey] as $optionKey => $optionValue) {
                if ($optionKey == $selected) {
                    $returnStatement .= '<option selected="selected" value="' . $optionKey . '">' . $optionValue . '</option>';
                } else {
                    $returnStatement .= '<option value="' . $optionKey . '">' . $optionValue . '</option>';
                }
            }

            $returnStatement .= '</optgroup>';
        }
    } else {
        foreach ($option as $key => $value) {
            if ($key == $selected) {
                $returnStatement .= '<option selected="selected" value="' . $key . '">' . $value . '</option>';
            } else {
                $returnStatement .= '<option value="' . $key . '">' . $value . '</option>';
            }
        }
    }

    return $returnStatement;
}





?>