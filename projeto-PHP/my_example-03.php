<?php
/** @param Exemplo-03 em PHP: 
 * @andrepanizz
 */
class Carros {


public string $produto;
public string $marca;
public float $preco;
public string $fabricante;
public string $vendedor;


public function __construct($fabri, $marc)
{
    $this->fabricante = $fabri;
    $this->marca = $marc;
        
}

public function setProduto($prod){
    $this->produto = $prod;

}

public function getProduto(){
    return $this->produto;
    
}







}

 


?>