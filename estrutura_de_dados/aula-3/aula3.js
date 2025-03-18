class MeuArray{
    constructor()
    {
        this.items = [] //usamos um objeto para armazenar os itens do array
        this.tamanho = 0; //mantemos o controle do tamanho do array
        console.log('chamou o construtor');
    }

    //Adiciona um elemento no final do array
    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento //Insere o elemento na posição atual do tamanho
        this.tamanho++ //Incrementa o tamanho
    }
    
    //Remove o último elemento do array
    remover()
    {
        if(this.tamanho === 0) {
            return undefined // se o array estiver vazio, não há o que remover
        }
        const ultomoItem = this.items[this.tamanho - 1] //armazena o último item
        delete this.items[this.tamanho - 1] //remove o último item do array
        this.tamanho--; //remove o tamanho

        return ultomoItem //retorna o item removido
    }
    
    //acessa o elemento em um índice específico
    obterElemento(indice){
        if(indice < 0 || indice >= this.tamanho){
            return undefined //se o índice estiver fora do alcance, retorna undefined
        }
        return this.items[indice]; //retorna o elemento no índice solicitado
    }
    //retorna o tamanho do array
    tamanhoArray()
    {
        return this.tamanho; //retorna o valor do tamanho atual do array
    }

    //remove todos os elementos do array
    limpar()
    {
        this.items = []; //limpa o objeto
        this.tamanho = 0; //reinicializa o tamanho
    }
}

// Exemplo de uso
// let minha_variavel = new MeuArray();

// minha_variavel.adicionar(10);
// console.log('adicionou 10');
// minha_variavel.adicionar(20);
// console.log('adicionou 20');
// minha_variavel.adicionar(30);
// console.log('adicionou 30');

// console.log(minha_variavel.obterElemento(1));  // Saída: 20
// console.log(minha_variavel.tamanhoArray());    // Saída: 3

// console.log(minha_variavel.remover());         // Saída: 30 (Remove o último elemento)
// console.log(minha_variavel.tamanhoArray());    // Saída: 2
// console.table(minha_variavel);                 // Saída: {0: 10, 1: 20}

// EXERCÍCIO 1

// uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
// cada tarefa será armazenada em um array utilizando a classe MeuArray.

// requisitos: 
// criar uma instância da classe MeuArray
// adicionar 5 tarefas ao array
// remover a última tarefa adicionada
// exibir todas as tarefas armazenadas
let tarefas = new MeuArray();

//Adicionando tarefas
tarefas.adicionar('tarefa 1');
console.log('adicionou tarefa 1');
tarefas.adicionar('tarefa 2');
console.log('adicionou tarefa 2');
tarefas.adicionar('tarefa 3');
console.log('adicionou tarefa 3');
tarefas.adicionar('tarefa 4');
console.log('adicionou tarefa 4');
tarefas.adicionar('tarefa 5');
console.log('adicionou tarefa 5');

//Removendo a última tarefa
tarefas.remover();
console.log('removeu a última tarefa');
console.table(tarefas);//mostra todas as tarefas

console.log('lista de tarefas');
for(let i = 0; i < tarefas.tamanhoArray(); i++)
{
    console.log(tarefas.obterElemento(i));
}

//com for each
console.log('lista de tarefas com forEach');
tarefas.items.forEach(tarefa => {
    console.log(tarefa);
});


// EXERCÍCIO 2

// O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que 
// participaram de um treinamento.

// Requisitos:
// Criar uma instância da classe MeuArray.
// Adicionar os nomes de quatro funcionários ao array.
// Obter o nome do terceiro funcionário que participou.
// Limpar todos os registros do array.

let funcionario = new MeuArray();

//Adicionando funcionários
funcionario.adicionar('serjo');
funcionario.adicionar('jão');
funcionario.adicionar('zé');
funcionario.adicionar('domitila');

//antes de limpar o array
console.table(funcionario);

//removendo o terceiro funcionário
console.log('terceiro funcionário: ', funcionario.obterElemento(2));
funcionario.limpar();

// tentando acessar o terceiro funcionário após limpar o array
console.log('terceiro funcionário: ', funcionario.obterElemento(2));
//depois de limpar
console.table(funcionario);