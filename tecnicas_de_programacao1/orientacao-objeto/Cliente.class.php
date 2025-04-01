<?php

class Cliente{
    public $nome;
    public $cpf;
    public $celular;
}

    $cliente1 = new Cliente();
    $cliente1 ->nome = "Paulo da Silva";
    $cliente1 ->cpf = "11111111111111111";
    $cliente1 ->celular = "5514999999999";
    echo "<pre>";
    var_dump($cliente1);
    echo "<pre>";
    $cliente1 = new Cliente();
    $cliente1 ->nome = "Luis";
    $cliente1 ->cpf = "222222222222222222";
    $cliente1 ->celular = "5514999999999";
    echo "<pre>";
    var_dump($cliente1);
    echo "<pre>";
    $cliente1 = new Cliente();
    $cliente1 ->nome = "Leo";
    $cliente1 ->cpf = "333333333333333333";
    $cliente1 ->celular = "5514999999999";
    echo "<pre>";
    var_dump($cliente1);
    echo "<pre>";
?>