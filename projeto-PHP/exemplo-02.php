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

    }

    public function getnumero():string
    {
        return $this->numero;
    }

    #function static:
    public static function Validarcpf($cpf)
    {


    }
    

}

// create connections:





?>