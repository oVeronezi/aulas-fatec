class MinhaPilha{
    constructor(){
        this.items = {}; //Usamos um objeto para armazenar os elementos da pilha
        this.tamanho = 0; //mantemos o controle do tamanho da pilha
    }

    //Adiciona um elemento ao topo da pilha
    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento; //Insere um elemento no topo da pilha
        this.tamanho++; //Incrementa o tamanho da pilha
    }

    //Remove o elemento do topo da pilha
    remover()
    {
        if(this.tamanho === 0) {
            return undefined; //Se a pilha estiver vazia, retorna undefined
        }

        const ultomoItem = this.items[this.tamanho - 1]; //Armazena o último item
        delete this.items[this.tamanho - 1]; //Remove o último item
        this.tamanho--; //Decrementa o tamanho da pilha

        return ultomoItem; //Retorna o item removido
    }

    //Retorna o elemento do topo da pilha
    topo()
    {
        if(this.tamanho === 0) {
            return undefined; //Se a pilha estiver vazia, retorna undefined
        }
        return this.items[this.tamanho - 1]; //Retorna o último item
    }

    //Verifica se a pilha está vazia
    estaVazia()
    {
        return this.tamanho ===0; // verifica se o tamanho da pilha é 0
    }

    //Retorna o tamanho da pilha
    tamanhoPilha()
    {
        return this.tamanho; //Retorna o tamanho da pilha
    }

    //Limpa a pilha
    limpar()
    {
        this.items = {}; //Limpa a pilha
        this.tamanho = 0; //Zera o tamanho da pilha
    }

}

//Exemplos de uso
// let minha_variavel = new MinhaPilha();

// minha_variavel.adicionar(10);
// minha_variavel.adicionar(20);
// minha_variavel.adicionar(30);

// console.log(minha_variavel.topo()); //saída: 30 (elemento do topo)

// console.log(minha_variavel.remover()); //saída: 30 (remove o elemento do topo)
// console.log(minha_variavel.topo()); //saída: 20 (elemento do topo)

// console.log(minha_variavel.tamanhoPilha()); //saída: 2 (sobram dois elementos na pilha)

//Exercício 1
// o grande feiticeiro Eldrin vive em uma torre cheia de livros de feitiços.
// Ele sempre coloca os novos livros no topo da pilha e só pode pegar o que está no topo primeiro.

// implemente um sistema para ajudá-lo a organizar seus feitiços com as seguintes funcionalidades:

//Adicionar um novo livro de feitiço
//Remover o livro de feitiço do topo(Eldrin usou e guardou em outro lugar)
//Verificar qual livro de feitiço está no topo sem removê-lo
//verificar se não há mais feitiços na pilha
console.log('Exercicio 1');
console.log();
let geralt = new MinhaPilha();

//adicionando um livro de feitiço
geralt.adicionar('Aard');
geralt.adicionar('Igni');
geralt.adicionar('Quenn');

//removendo o livro de feitiço
console.log(geralt.topo()); //saída: Quenn (elemento do topo)
console.log(geralt.remover() + ' foi removida'); //saída: Quenn (remove o elemento do topo)
console.log('');

//verificando qual está no topo
console.log(geralt.topo() + ' é o novo elemento do topo') //saída: Igni (elemento do topo)
console.log('');

//verificando se não há mais feitiços na pilha
console.log(geralt.estaVazia()); //saída: false
console.log();

console.log('Exercício 2');
//Exercicio 2
// O capitão Barbarruiva tem um baú cheio de tesouros, mas ele só pode pegar o último item que colocou

//Crie um programa para ajudá-lo a:

// guardar um novo tesouro
// retirar o último tesouro guardado
// olhar qual é o último tesouro sem pegá-lo
// saber se o baú está vazio

let cap = new MinhaPilha();

//guardar um novo tesouro
cap.adicionar('mil conto de réis');
cap.adicionar('oro');
cap.adicionar('rélme de diamond');
console.log('');

//olhar todos os itens antes de remover
console.log(cap.items);
console.log('');

//retirar o último tesouro guardado
console.log(cap.topo()); //saída: rélme de diamond (elemento do topo)
console.log(`O item removido foi: ${cap.remover()}`);
console.log('');

//olhar qual é o último tesouro sem pegá-lo
console.log(`O último tesouro é: ${cap.topo()}`);
console.log('');

//saber se está vazio
console.log(`Está vazio? ${cap.estaVazia()}`);