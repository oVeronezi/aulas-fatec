class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Próximo nó
        this.prev = null; // Nó anterior
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Primeiro nó (cabeça)
        this.tail = null; // Último nó (cauda)
        this.length = 0; // Tamanho da lista
    }

    // adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    // adicionar um nó ao início da lista
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // remover o nó do final da lista
    removeLast() {
        if (!this.tail) return null;

        const removedNode = this.tail;
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode.value;
    }

    // remover o nó do início da lista
    removeFirst() {
        if (!this.head) return null;

        const removedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode.value;
    }

    // Percorrer a lista do início ao fim
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorrer a lista do fim ao início
    traverseReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }
}


// 1) Implemente uma função na classe DoublyLinkedList que insira um nó em uma
// posição específica, chamando insertAt(value, index)

// COMENTE TODO CÓDIGO DOS EXERCÍCIOS EXPLICANDO SEU FUNCIONAMENTO