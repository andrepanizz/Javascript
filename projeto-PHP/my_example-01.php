<?php
/*Seguindo a Documentação do PHP, temos a parte de Variaveis:
 Definindo alguns exemplos aqui da documentação, temos:
 nome de constantes validos: */

$separador = "<hr>";

define("FOO", "alguma coisa");
define("FOO2", "alguma outra coisa!");
define("FOO_BAR", "alguma coisa mais");
// Criando mais algumas constantes utilizando define();
define("NUMBER", 1);
define("NUMBER2", 2);
define("NUMBER3", 3);

$num1 = 1;
$num2 = 2;
$num3 = 3;

/* A function is_string, is_int, is_bool, is_float
   Verifica se o tipo de variavel e string, int, bool ou float
   é uma forma de validação mais inteligente para passarmos as constantes: */
// Nomes de constantes invalidos:]
define("2FOO", "alguma coisa");

// este nome e valido mais deve ser evitado, mostrando aqui:
echo "FOO" . "<br>";
echo "FOO2" . "<br>";
echo "FOO_BAR" . "<br>";
echo $separador;


?>