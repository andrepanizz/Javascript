<?php
$server = "mysql:dbname=dbphp7;";
$hostname = "host=localhost;";
$user = "root";
$password = "root";
$port = "3307";

$conn = new PDO("mysql:dbname=dbphp7;host=localhost","root","root");

#stmt será utilizado desta forma:



$stmt = $conn->prepare("INSERT INTO tb_usuarios (deslogin, dessenha) VALUES (':LOGIN, :PASSWORD')");



# passando como se fosse um ID, desta forma acima:
$login = "jose";
$senha = "123456";

# utilizando o BindParam usando no Statement para cada parametro que temos aqui abaixo:

$stmt->bindParam(':LOGIN', $login);
$stmt->bindParam('PASSWORD',$senha);

# Executaremos isto para rodar:
$stmt->execute();

echo "Inserido OK";

class Pessoa {
  public $cpf;

  public static function($cpf){
    // Validar CPF:

    if(empty($cpf)) {
        return false;
    }
 
    $cpf = preg_match('/[0-9]/', $cpf)?$cpf:0;

    $cpf = str_pad($cpf, 11, '0', STR_PAD_LEFT);
     
    
    if (strlen($cpf) != 11) {
        echo "length";
        return false;
    }
    
    else if ($cpf == '00000000000' || 
        $cpf == '11111111111' || 
        $cpf == '22222222222' || 
        $cpf == '33333333333' || 
        $cpf == '44444444444' || 
        $cpf == '55555555555' || 
        $cpf == '66666666666' || 
        $cpf == '77777777777' || 
        $cpf == '88888888888' || 
        $cpf == '99999999999') {
        return false;

     } else {   
         
        for ($t = 9; $t < 11; $t++) {
             
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }
 
        return true;
    }
    
  }
}

?>
