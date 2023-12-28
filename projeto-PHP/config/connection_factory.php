<?php
// Aqui será criada uma classe mais elaborada para efetiva:
require_once("../config/connection.php");

class connection_factory {

    // criaremos aqui uma função que efetivamente inicializa a conexão;
    public static function createConnection() {
        $connection =  new Connection(
            // aqui devemos passar as conexões:
            "localhost",
            "db1",
            "3306",
            "root",
            ""

        );
        // Aqui efeti
    }
}




?>