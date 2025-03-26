class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtEnd(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    removeByValue(value) {
        if (this.head === null) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    find(value) {
        let current = this.head;
        let position = 0;

        while (current !== null) {
            if (current.value === value) {
                return position; // Retorna a posição (índice 0-based)
            }
            current = current.next;
            position++;
        }

        return -1; // Retorna -1 se não encontrar
    }

    printList() {
        let current = this.head;
        let list = "";
        while (current !== null) {
            list += current.value + " -> ";
            current = current.next;
        }
        console.log(list + "null");
    }
}


// Na corrida anual das tartarugas, cada tartaruga segue a outra formando
// uma fila (como uma lista encadeada). As tartarugas são muito pacientes,
// mas a tartaruga "Lenta" decide desistir da corrida, e outra, "Veloz", quer
// entrar na fila em uma posição específica.
// • Sua missão é:
// – Inserir uma nova tartaruga no início da fila e outra no final.
// – Remover a tartaruga "Lenta" da corrida, se ela estiver na fila.
// – Encontrar a tartaruga "Veloz" para saber em que posição ela está.
// – Ajude as tartarugas a organizarem a fila e implemente essas operações usando uma
// lista encadeada.



// 1. Criar a fila de tartarugas
let tartarugas = new LinkedList();

// 2. Inserir tartarugas no início e no fim da fila
tartarugas.insertAtBeginning("Leonardo");
tartarugas.insertAtBeginning("Michelangelo");
tartarugas.insertAtEnd("Donatello");
tartarugas.insertAtEnd("Raphael");
tartarugas.insertAtEnd("Lenta"); // Tartaruga que vai desistir
tartarugas.insertAtBeginning("Veloz"); // Tartaruga que quer entrar no início

console.log("Fila inicial das tartarugas:");
tartarugas.printList();
// Veloz -> Michelangelo -> Leonardo -> Donatello -> Raphael -> Lenta -> null

// 3. Remover a tartaruga "Lenta" (desistiu)
tartarugas.removeByValue("Lenta");
console.log("\nFila após remover a Lenta:");
tartarugas.printList();
// Veloz -> Michelangelo -> Leonardo -> Donatello -> Raphael -> null

// 4. Encontrar a posição da tartaruga "Veloz"
let posicaoVeloz = tartarugas.find("Veloz");
if (posicaoVeloz !== -1) {
    console.log(`\nA tartaruga Veloz está na posição ${posicaoVeloz} (índice 0-based).`);
} else {
    console.log("\nA tartaruga Veloz não está na fila.");
}
// Saída: A tartaruga Veloz está na posição 0 (índice 0-based).


tartarugas.printList();