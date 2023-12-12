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
public float  $descount;


public function __construct($fabri, $marc, $off)
{
    $this->fabricante = $fabri;
    $this->marca = $marc;
    $this->descount = $off;
        
}

public function setProduto($prod){
    $this->produto = $prod;

}

public function getProduto(){
    return $this->produto;

}

public function setPreco($price){
    $this->preco = $price;

}
public function getPreco(){

    return $this->preco;

}

public function setDiscount($OFF){
    $this->descount = $OFF;

}

public function getDiscount(){
    return $this->descount;
}





}

 


?>