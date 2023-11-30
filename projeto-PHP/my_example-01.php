<?php
/*Seguindo a Documentação do PHP, temos a parte de Variaveis:
 Definindo alguns exemplos aqui da documentação, temos:
 nome de constantes validos: */

$separator = "<hr>";

define("FOO", "alguma coisa");
define("FOO2", "alguma outra coisa!");
define("FOO_BAR", "alguma coisa mais");
// Criando mais algumas constantes utilizando define();
define("NUMBER", 1);
define("NUMBER2", 2);
define("NUMBER3", 3);
// variaveis comuns:

$num1 = 1;
$num2 = 2;
$num3 = 3;
$num4 = "andre";

/* A function is_string, is_int, is_bool, is_float
   Verifica se o tipo de variavel e string, int, bool ou float
   é uma forma de validação mais inteligente para passarmos as constantes: */
// Nomes de constantes invalidos:]
define("2FOO", "alguma coisa");

// este nome e valido mais deve ser evitado, mostrando aqui:
echo constant("FOO"). "<br>";
echo constant("FOO2"). "<br>";
echo constant("FOO_BAR"). "<br>";
echo $separator;
echo constant("NUMBER"). "<br>";
echo constant("NUMBER2"). "<br>";
echo constant("NUMBER3"). "<br>";
echo $separator;
echo is_int($num1) . "<br>";
echo is_int($num2) . "<br>";
echo is_int($num3) . "<br>";
echo is_string($num4) . "<br>";
echo is_string(constant("FOO")) . "<br>";
echo is_string(constant("FOO2")) . "<br>";
echo is_string(constant("FOO_BAR")) . "<br>";
// criaremos um array pra armazenar as variaveis e as constants:

$numeros = array();
if(constant("FOO") === 1 || $num1 === 1):
    array_push($numeros, $num1, $num2, $num3, $num4, constant("FOO"), constant("FOO2"), constant("FOO_BAR"), constant("NUMBER"), constant("NUMBER2"), constant("NUMBER3"));
    foreach($numeros as $value):
        echo "is_string (=  ";
        var_export($value);
        echo " "  . "<br>";
        echo var_dump(is_string($value));
    endforeach;
endif;

 echo $separator;
// Bom agora podemos converter varios valores em outros tipos de dados
// utilizando settype:

settype($num, "string");
echo "<br><br>";
echo  $separator;

/* Agora neste exemplo temos exemplo basico usando o match  */

$comida = 'bolo';

$valor_de_retorno = match($comida){
    'apple' => 'Essa comida e uma Maçã!',
    'bar' => 'Essa comida e um Bar',
    'bolo' => 'Essa comida e um Bolo',

};

var_dump($valor_de_retorno);

// como se fosse um array podemos ter exemplos diferentes de match;

$animal = 'cat';

$value_of_return = match($animal){
    'dog' => 'Este Animal e um Cachorro',
    'fly' => 'este Animal voa e um Passaro',
    'cat' => 'este Animal e um Gato',
};

var_dump($value_of_return);
// Mais um exemplo de match
$variable = 'fireguns';

$my_exemple_the_match = match($value){
    'marchine_gun'=>'This is combat arms this name Super Machine gun',
    'subMarchine_gun'=>'this a subMachine use bullets 9mm parabellum',
    'firegun' => 'this is a firegun arms collectible'

};
var_dump($my_exemple_the_match);

$var = 'cake2';

$my_example2_for_match = match($var){
    'banana' => 'this is a fruit banana power',
    'mellon' => 'this is a melon contains must water for life the humans',
    'cake2'  => 'this is a sugar cake beatifull an good',
};
// just one is thue in options listed here.

