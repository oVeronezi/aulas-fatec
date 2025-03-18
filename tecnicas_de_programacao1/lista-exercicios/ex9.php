<!-- Criar um Vetor de Cores e Exibi-las em HTML
Crie um vetor de cores e use-o para exibir quadrados coloridos
(<div style="width:50px; height:50px; background-color:cor;"></div>). -->

<?php
$cores = array("red", "blue", "black", "yellow", "antiquewhite", "grey");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Quadrados Coloridos</title>
    <style>
        .quad {
            width: 50px;
            height: 50px;
            display: inline-block;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h2>Quadrados Coloridos</h2>
    <?php
    foreach ($cores as $cor) {
        echo "<div class='quad' style='background-color: $cor;'></div>";
    }
    ?>
</body>
</html>

</body>
</html>