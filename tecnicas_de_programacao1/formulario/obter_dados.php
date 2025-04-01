<?php
	if($_GET)
	{
		//echo "O nome é " . $_GET["nome"] . "<br>";
		echo "O nome é {$_GET["nome"]}<br>";
		echo "O e-mail é {$_GET["email"]}<br>";
		echo "A Profissão é {$_GET["profissao"]}<br>";
		if(isset($_GET["sexo"]))
		{
			echo "O sexo é {$_GET["sexo"]}<br>";
		}
		else
		{
			echo "Sexo não foi informado<br>";
		}
		//verificando lazer
		
		echo "Lazer:<br> ";
		if(isset($_GET["lazer"]))
		{
			foreach($_GET["lazer"] as $dado)
			{
				echo "$dado<br>";
			}
		}
		else
		{
			echo "Não tem<br>";
		}
			
		if(empty($_GET["observacao"]))
		{
			echo "Não há observação";
		}
		else
		{
			echo "Observação: {$_GET["observacao"]}";
		}
	}
	else
	{
		header("location:index.html");
		die();
	}
	
?>