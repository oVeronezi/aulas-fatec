<?php
// 1- exibir um vetor simples
//     Crie um vetor com 5 nomes e exiba-os em uma lista <ul> no html

$nomes = array('Maria','João', 'Pedro', 'Memphis', 'Leonardo');
echo "<h1><b>Lista de Nomes</b></h1>";
echo '<ul>';

foreach($nomes as $nome){
    echo "<li>$nome</li>";
}
echo'</ul>';
?>