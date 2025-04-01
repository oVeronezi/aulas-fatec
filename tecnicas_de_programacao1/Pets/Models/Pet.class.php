<?php
	class Pet
	{
		public function __construct(private string $nome = "", private int $idade = 0, private string $cor = "", private string $raca = ""){}
		
		//métodos get
		
		public function getNome()
		{
			return $this->nome;
		}
		public function getIdade()
		{
			return $this->idade;
		}
		public function getCor()
		{
			return $this->cor;
		}
		public function getRaca()
		{
			return $this->raca;
		}
		//métodos sets
		
		public function setNome($nome)
		{
			$this->nome = $nome;
		}
		public function setIdade($idade)
		{
			$this->idade = $idade;
		}
		public function setCor($cor)
		{
			$this->cor = $cor;
		}
		public function setRaca($raca)
		{
			$this->raca = $raca;
		}
		
		
	}
?>