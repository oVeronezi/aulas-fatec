// Definição das classes Node e LinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Ponteiro para o próximo nó
    }
}

class LinkedList {
    constructor() {
        this.head = null; // A lista começa vazia
    }

    // Inserir no início da lista
    insertAtBeginning(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Inserir no fim da lista
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

    // Remover um nó por valor
    removeByValue(value) {
        if (this.head === null) {
            return;
        }

        // Se o nó a ser removido for o primeiro
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

    // Buscar um nó por valor
    find(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null; // Retorna null se o valor não for encontrado
    }

    // Exibir a lista (para facilitar a visualização)
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

// --- Resolução do problema do explorador ---

// 1. Criar a lista de trilhas
let trilhas = new LinkedList();

// 2. Inserir pontos no início e no fim da trilha
trilhas.insertAtBeginning("caverna");
trilhas.insertAtEnd("masmorra");
trilhas.insertAtBeginning("dungeon");
trilhas.insertAtEnd("rio");

console.log("Trilha inicial:");
trilhas.printList(); // dungeon -> caverna -> masmorra -> rio -> null

// 3. Remover um local perigoso (suponha que "masmorra" seja perigosa)
trilhas.removeByValue("masmorra");
console.log("\nTrilha após remover a masmorra:");
trilhas.printList(); // dungeon -> caverna -> rio -> null

// 4. Verificar se "dungeon" ainda está na trilha (simulação de mirante)
let mirante = trilhas.find("dungeon");
if (mirante) {
    console.log("\nO dungeon ainda faz parte da trilha!");
} else {
    console.log("\nO dungeon não está mais na trilha.");
}