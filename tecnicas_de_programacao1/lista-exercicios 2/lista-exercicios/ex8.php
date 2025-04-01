<!-- Exibir a Diagonal Principal de uma Matriz 3x3
Crie uma matriz 3x3 fixa e exiba apenas os números da diagonal principal 
(onde o índice da linha é igual ao da coluna). -->

<?php
$matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
echo 'Linhas da matriz:';
echo $matriz[0][0].', ';
echo $matriz[1][1].' e ';
echo $matriz[2][2].'.';
?>