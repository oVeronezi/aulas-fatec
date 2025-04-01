<!-- Ordenação Manual de um Vetor
Crie um vetor de 3 números e ordene-os manualmente (sem usar sort()), comparando e trocando os valores, se necessário. -->

<?php
$numeros = array(9, 3, 7);

if ($numeros[0] > $numeros[1]) {
    $temp = $numeros[0];
    $numeros[0] = $numeros[1];
    $numeros[1] = $temp;
}

if ($numeros[1] > $numeros[2]) {
    $temp = $numeros[1];
    $numeros[1] = $numeros[2];
    $numeros[2] = $temp;
}

if ($numeros[0] > $numeros[1]) {
    $temp = $numeros[0];
    $numeros[0] = $numeros[1];
    $numeros[1] = $temp;
}


echo "Números em ordem crescente: " . $numeros[0].", " .$numeros[1]." e " .$numeros[2];
?>