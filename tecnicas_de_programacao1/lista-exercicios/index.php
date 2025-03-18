<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 1</title>
</head>
<body>
<!-- 1- exibir um vetor simples
 Crie um vetor com 5 nomes e exiba-os em uma lista <ul> no html -->
    <h3>Lista de Nomes</h3>
    <ul>
    <?php
$nomes = array('Hugo','Rodrigo', 'Yuri', 'Memphis', 'Angel');
echo '<ul>';

foreach($nomes as $nome){
    echo "<li>$nome</li>";
}
echo'</ul>';
?>
    </ul>
    
</body>
</html>