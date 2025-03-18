<!-- Copiar os Elementos de um Vetor para Outro
Crie um vetor com 4 números e copie cada valor manualmente para um segundo vetor. -->

<?php

$vetor1 = array(10, 20, 30, 40);

$vetor2 = array();
$vetor2[0] = $vetor1[0];
$vetor2[1] = $vetor1[1];
$vetor2[2] = $vetor1[2];
$vetor2[3] = $vetor1[3];

echo "Vetor 1: " . implode(", ", $vetor1) . "<br>";
echo "Vetor 2 (cópia): " . implode(", ", $vetor2);
?>