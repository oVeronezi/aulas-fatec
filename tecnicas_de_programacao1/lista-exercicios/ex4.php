<!-- Matriz 2x2 Estática
Crie uma matriz 2x2 e exiba seus valores em uma tabela HTML, usando comando for. -->
<?php
$matriz = [
    [1,2],
    [3,4]
];

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 4</title>
</head>
<body>
    <h1>Tabela/ Matriz</h1>
    <table>
    <?php
    for ($i = 0; $i < 2; $i++) {
        echo "<tr>";
        for ($j = 0; $j < 2; $j++) {
            echo "<td>" . $matriz[$i][$j] . "</td>";
        }
        echo "</tr>";
    }
    ?>
    </table>

    
</body>
</html>