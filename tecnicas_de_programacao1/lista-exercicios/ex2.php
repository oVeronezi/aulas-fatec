<?php
$numeros = array(1, 2, 3, 4, 5);

// Somando manualmente os valores acessando cada índice diretamente
$resultado = $numeros[0] + $numeros[1] + $numeros[2] + $numeros[3] + $numeros[4];

// Exibindo o resultado da soma manual
echo 'O resultado de '.$numeros[0] .'+ ' .$numeros[1] .'+ ' .$numeros[2] .'+ ' .$numeros[3] .'+ ' .$numeros[4] .' é: '. $resultado;

// Alternativamente, você pode usar o foreach para somar, se preferir:
$soma = 0;
foreach ($numeros as $dados) {
    $soma = $soma + $dados;
}

echo "<br>O valor da soma com foreach é: $soma";
?>
