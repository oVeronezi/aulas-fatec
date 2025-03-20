class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Ponteiro para o proximo nó
    }
}

class LinkedList {
    constructor() {
        this.head = null; // A lista começa vazia
    }

    //Inserir no inicio da lista
    insertAtBeginning(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    //Inserir no fim da lista
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

    //remover um nó por valor
    removeByValue(value) {
        if (this.head === null) {
            return;
        }

        //Se o nó a ser removido for primeiro
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

    //buscar um nó por valor
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
    //exibir a lista (opcional, para facilitara visualização)
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
