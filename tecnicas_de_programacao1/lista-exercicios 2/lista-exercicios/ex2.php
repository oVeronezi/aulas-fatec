<!-- Somar Elementos de um Vetor
Crie um vetor com 5 números inteiros e some manualmente os valores acessando cada índice diretamente. -->

<?php
$numeros = array(1, 2, 3, 4, 5);
$resultado = $numeros[0] + $numeros[1] + $numeros[2] + $numeros[3] + $numeros[4];

echo 'O resultado de '.$numeros[0] .'+ ' .$numeros[1] .'+ ' .$numeros[2] .'+ ' .$numeros[3] .'+ ' .$numeros[4] .' é: '. $resultado;
?>