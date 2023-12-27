<?php

class Connection {
// Na classe connection iremos criar 05 atributos de conexão:

    private string $host;
    private string $dbname;
    private string $port;
    private string $usuario;
    private string $senha;

    // Agora setaremos um metodo construtor()

public function __construct(
    string $host,
    string $dbname,
    string $porta,
    string $user,
    string $pass
){
    // agora passaremos os valores do atributo para o parametro()
    $this->host = $host;
    $this->dbname = $dbname;
    $this->port = $porta;
    $this->usuario = $user;
    $this->senha = $pass;
   
}
// Agora vamos criar uma função que devolve o PDO, ela faz o mesmo que $stmt = $conn->prepare("INSERT INTO ()");
public function connect() {
    // criaremos uma variavel: (esta variavel contem um charset para aceitar 'Ç ~' etc..);
    $dsn = "mysql:hostname=$this->host;dbname=$this->dbname;charset=utf8mb4";
    // agora vamos criar o PDO:
    $pdo = new PDO(
        //Aqui dentro vamos passar o username e a senha da conexão com o banco:
        $dsn, $this->usuario, $this->senha
    );

    // Bom agora invés de fazermos um IF como de costume usando:
    /** if($conn == msqli_connect_error && mysqli_connect_ernno):
     * trown new Exception('Houve um Erro de Conexão com a Base de Dados');
     * endif;
     * 
     * usaremos:
     */
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION, PDO::ERRMODE_WARNING);
        // criei um switch só para ilustrar o erro;
        switch($pdo):
            case PDO::ERRMODE_EXCEPTION:
                echo "Lança PDOExceptions";
            case PDO::ERRMODE_WARNING:
                echo "Gera diagnósticos E_WARNING.";
            case PDO::ATTR_ERRMODE:
                echo "Modo de relatório de erros do PDO. Pode assumir um dos seguintes valores";
        endswitch;

        return $pdo;
    }
}
        


            
        










?>