<?php
	require_once "../Models/Pet.class.php";
	$msg = array("","","","");
	$erro = false;
	if($_POST)
	{
		if(empty($_POST["nome"]))
		{
			$msg[0] = "Preencha o nome";
			$erro = true;
		}
		if(empty($_POST["idade"]))
		{
			$msg[1] = "Preencha a idade";
			$erro = true;
		}
		if(empty($_POST["cor"]))
		{
			$msg[2] = "Preencha a cor";
			$erro = true;
		}
		if($_POST["raca"] == 0)
		{
			$msg[3] = "Escolha a raça";
			$erro = true;
		}
		if(!$erro)
		{
			$pet = new Pet($_POST["nome"], $_POST["idade"], $_POST["cor"], $_POST["raca"]);
			//mostrar os dados 
			echo "Nome: {$pet->getNome()}<br>";
		}
	}
?>
<!doctype html>
<html>
	<head>
		<title>Pets</title>
		<meta charset="UTF-8">
	</head>
	<body>
		<h1>Pet</h1>
		<form action="#" method="post">
			<label>Nome:</label>
			<input type="text" name="nome">
			<div class="erro"></div><br>
			
			<label>Idade:</label>
			<input type="number" name="idade">
			<div class="erro"></div><br>
			
			<label>Cor:</label>
			<input type="text" name="cor">
			<div class="erro"></div><br>
			
			<label>Raça:</label>
			<select name="raca">
				<option value="0">Escolha a raça</option>
				<option>Pitbull</option>
				<option>Lhasa</option>
				<option>Yorkshare</option>
				<option>SRD</option>
			</select>
			<div class="erro"></div><br>
			<input type="submit" value="Cadastrar">
			
		</form>
	</body>
</html>