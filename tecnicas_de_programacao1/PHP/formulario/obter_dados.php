<?php
// echo "O nome é:" . $_GET['nome'] . "<br>";
echo "nome: {$_GET['nome']}  <br>";
echo "e-mail: {$_GET['email']}  <br>";
echo "profissão: {$_GET['profissao']}  <br>";
// echo "sexo: {$_GET['sexo']}  <br>";

if (isset($_GET['Sexo'])) {
    echo "sexo: {$_GET['Sexo']} <br>";
} else {
    echo "sexo não informado <br>";
}

if (isset($_GET['lazer1'])) {
    echo "lazer: {$_GET['lazer1']} <br>";
    $marcou = true;
}

if (isset($_GET['lazer2'])) {
    echo "lazer: {$_GET['lazer2']} <br>";
    $marcou = true;
}

if (isset($_GET['lazer3'])) {
    echo "lazer: {$_GET['lazer3']} <br>";
    $marcou = true;
}

if ($marcou == false) {
    echo "não tem<br>";
}

if (empty($_GET['observacao'])) {
    echo "não há observações";
} else {
    echo "observação: {$_GET['observacao']}";
}
