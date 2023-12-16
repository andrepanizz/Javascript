<?php
/** @param Exemplo-03 em PHP: 
 * @andrepanizz for github:
 * 
 * is_string:
 * is_int:
 * is_float
 * is_bool
 *  * 
 */
$variable = "this is string";
$var = 2;
$array = array("arrays", 20);
$bool = true;
$media = 2.75;
$short_long = "Longshot";
is_int($variable);
is_array($var);
is_float($media);
is_bool($bool);
is_long($short_long);

echo "\n";

/* Exibindo tudo aqui:   */
echo "<br/>";
// instanciando a classe 
class Pessoa {
    public string $rg;
    public string $cpf;
    public string $nome;
    public string $endereco;
    public int $numero;

    // getters and Setters:
    public function setRg($rg)
    {
        $this->rg = $rg;
    }
    


}
?>