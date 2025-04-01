<!-- Tabela de Produtos (Array nomeado)
Crie um array nomeado onde a chave é o nome de um produto e o valor é seu preço. Exiba os produtos em uma tabela HTML. -->

<?php
$produtos = array(
    "Notebook" => 3500.00,
    "Celular" => 2000.00,
    "Mouse" => 50.00,
    "Teclado" => 120.00
);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Tabela de Produtos Nomeados</title>
</head>
<body>
    <h2>Lista de Produtos</h2>
    <table>
        <tr>
            <th>Produto</th>
            <th>Preço (R$)</th>
        </tr>
        <?php
        // Percorre o array e exibe os produtos na tabela
        foreach ($produtos as $nome => $preco) {
            echo "<tr>";
            echo "<td>$nome -</td>";
            echo "<td>R$ " .$preco . "</td>";
            echo "</tr>";
            echo "--------------";
        }
        ?>
    </table>
</body>
</html>
