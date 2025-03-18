<?php
// Criando uma matriz nomeada para armazenar contatos
$contatos = [
    ['nome' => 'Leonardo', 'telefone' => '14 99999-9999', 'email' => 'leonardo@email.com'],
    ['nome' => 'Pedro', 'telefone' => '14 99999-9998', 'email' => 'pedro@email.com'],
    ['nome' => 'Luis', 'telefone' => '14 99999-9997', 'email' => 'luis@email.com']
];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda de Contatos</title>
    </head>
<body>

    <h1>Agenda de Contatos</h1>


        <?php
        foreach ($contatos as $contato) {
            echo "{$contato['nome']}</br>";
            echo "{$contato['telefone']}</br>";
            echo "{$contato['email']}</br><br>";
        }
        ?>

</body>
</html>
