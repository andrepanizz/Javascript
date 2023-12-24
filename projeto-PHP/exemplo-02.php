<?php

class register_Users {

    protected string $user;
    protected string $birth_date;
    protected string $age;
    protected string $color_from_the_skin;
    protected string $admission_from_the_date;
    private   string $numero;
    
    public function __construct($niver,$admin_date,$idade)
    {
        $this->birth_date = $niver;
        $this->admission_from_the_date = $admin_date;
        $this->age = $idade;
        
    }
    // getters and Setters:
    public function setUser($user)
    {
        $this->user = $user;

    }

    public function getUser():string
    {
        return $this->user;

    }

    public function setSkinColor($color)
    {
        $this->color_from_the_skin = $color;
       
    }

    public function getSkinColor():string
    {
        return $this->color_from_the_skin;

    }

    public function setNumero($numero)
    {
        $this->numero = $numero;

        $result = register_Users::validarCpf($numero); //metodo estatico chamado pela classe, passando a variavel $numero;

    }

    public function getnumero():string
    {
        return $this->numero;
    }

    #function static:
    public static function Validarcpf($cpf)
    {
        if(empty($cpf)) return false;

        # elimina possivel mascara:

        $cpf = preg_replace('[^0-9]','',$cpf);
        $cpf = str_pad($cpf,11,0,STR_PAD_LEFT);
        
        # Verifica se o numero e digitos informados  e igual a 11:

            if(strlen($cpf) != 11):
                return false;
            # Verifica se nenhuma das sequencias e invalida:
            elseif($cpf == '00000000000' ||
                   $cpf == '11111111111' ||
                   $cpf == '22222222222' ||
                   $cpf == '33333333333' ||
                   $cpf == '44444444444' ||
                   $cpf == '55555555555' ||
                   $cpf == '66666666666' ||
                   $cpf == '77777777777' ||
                   $cpf == '88888888888' ||
                   $cpf == '99999999999'):
                   return false;
            else:

                #laço for simples:
                    for ($t=9; $t < 11; $t++):
                        #note que $t inicializa com 9 enquanto $t for menor que 11, incrementa pra mim;
                        
                        for($d = 0; $c = 0; ):
                            /* @andrepanizz Notação:
                            $d - inicializa com 0;
                            $c - inicializa com 0;
                            enquanto $c for menor que $t = 9, incrementa pra mim $c de 1 em 1; ++
                            */
                            $d+= $cpf[$c] * (($t + 1) - $c);
                            // $d + $d = $cpf[$c] multiplicado por ($t + 1) menos $c
                        endfor;

                            // % significa o resto da divisão;
                            $d = ((10 * $d) % 11) % 10;
                            // Se $cpf[$c] for diferente de $d retorna False pra mim;
                            if($cpf[$c] != $d):
                                return false;
                            endif;
                    endfor;
                    
                    
            endif;          

            return true;
            
            
    }
    

}

class addInformation extends register_Users {

    // recover all:
    public function viewAll(){
        return array(
            '<strong> Nome do usuario: </strong><br/>'=>$this->user,
            '<strong> Aniversario: </strong><br/>'=>$this->birth_date,
            '<strong> Idade: </strong><br/>'=>$this->age,
            '<strong> Cor: </strong><br/>'=>$this->color_from_the_skin,
            '<strong> Data de Admissão: </strong><br/>'=>$this->admission_from_the_date
            
        );

                
    }

    
}

$conn = new PDO("mysql:host=localhost;dbname=register_db;","root","");

try{
    if($conn == mysqli_connect_errno()):
        throw new Exception(ucwords('Não foi possivel estabelecer uma conexão!'));
    endif;
}catch(Exception $e) {
    print("Algo deu errado na conexão com o banco que será tratada \n");

}finally{
    print("Connection has been Sucessfully!");

}
$stmt = $conn->prepare("UPDATE tb_usuarios SET ");
$stmt->bindParam(":ID", $login);
//////////////////


?>