class Fila {
    constructor() {
        this.items = {}; // Usamos um objeto para armazenar os itens
        this.inicio = 0; // Representa o indice do inicio da fila
        this.fim = 0; // Rerpesenta o indice do fim da fila
    }

    // Adiciona um elemento ao final da fila (enqueue)
    enqueue(elemento) {
        this.items[this.fim] = elemento; //Coloca o elemento no fim da fila
        this.fim++; //Incrementa o indice do fim da fila
    }

    // Remove e retorna o primeiro elemento da fila (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return undefined; // Se a fila estiver vazia, retorna undefined
        }

        const item = this.items[this.inicio]; // Obtem o primeiro elemento
        delete this.items[this.inicio]; // Remove o item do inicio da fila
        this.inicio++; // Move o indice do inicio para o proximo item

        // Quando o inicio e o fim estiverem alinhados, redefine a fila
        if (this.inicio === this.fim) {
            this.inicio = 0;
            this.fim = 0;
        }

        return item; // Retorna o item removido
    }

    //Retorna o primeiro elemento da fila sem remove-lo (peek)
    front() {
        if (this.isEmpty()) {
            return undefined; // Se a fila estiver vazia, retorne undefined
        }
        return this.items[this.inicio]; // Retorna o primeiro elemento
    }

    isEmpty() {
        return this.fim === this.inicio; // Verifica se os indices estão iguais
    }

    // Retorna o tamanho da fila
    size() {
        return this.fim - this.inicio; // Calcula a diferença entre o fim e o inicio
    }

    //Limpa a fila
    clear() {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }
}

// Exemplo de uso
let minha_variavel = new Fila();

minha_variavel.enqueue("cliente 1");
minha_variavel.enqueue("cliente 2");
minha_variavel.enqueue("cliente 3");

console.log(minha_variavel.front()); // Saida: "Cliente 1"

console.log(minha_variavel.dequeue()); // Saida: "Cliente 1"
console.log(minha_variavel.dequeue()); // Saida: "Cliente 2"

minha_variavel.enqueue("Cliente 4");

console.log(minha_variavel.size()); // Saida: 2 (Cliente 3 e Cliente 4 ainda estão na fila)
console.log(minha_variavel.front()); // Saida: "Cliente 3"





