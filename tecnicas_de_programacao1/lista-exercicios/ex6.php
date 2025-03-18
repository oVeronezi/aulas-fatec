<!-- Média de Notas dos Alunos
Armazene as notas de 2 alunos (cada um com 3 notas) e exiba a média de cada um. -->

<?php
$nota1 = array(10, 6, 7);
$nota2 = array(7, 5, 8);
$aluno = array('Lucas', 'Maurício');
$media1 = ($nota1[0] + $nota1[1] + $nota1[2]) /3;
$media2 = ($nota2[0] + $nota2[1] + $nota2[2]) /3;

echo 'A média de '.$aluno[0] .' é: '.number_format($media1,2);
echo'<br><br/>';
echo 'A média de '.$aluno[1] .' é: '.number_format($media2,2);
?>