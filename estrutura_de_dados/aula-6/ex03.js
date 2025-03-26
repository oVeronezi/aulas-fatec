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
                return true; // Retorna true se encontrar
            }
            current = current.next;
        }

        return false; // Retorna false se não encontrar
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


// Em uma batalha épica, um grupo de heróis possui uma sequência de
// poderes especiais (representados por uma lista encadeada), e cada herói
// pode ativar um poder em sequência. No entanto, durante a batalha, eles
// precisam reorganizar e ajustar seus poderes:
// – Adicione um novo poder no início e outro no fim da lista de poderes.
// – Um dos poderes, "Raio Congelante", acabou se tornando ineficaz, então ele precisa
// ser removido.
// – Verifique se o poder "Escudo de Fogo" está disponível para o herói ativar.
// – Implemente essa lista encadeada para ajudar os heróis a gerenciar seus poderes
// durante a batalha.


// 1. Criar a lista de poderes
let poderesHerois = new LinkedList();

// 2. Adicionar poderes no início e no fim da lista
poderesHerois.insertAtBeginning("Super Força");
poderesHerois.insertAtEnd("Raio Congelante");
poderesHerois.insertAtBeginning("Escudo de Fogo");
poderesHerois.insertAtEnd("Invisibilidade");

console.log("Lista inicial de poderes:");
poderesHerois.printList();
// Escudo de Fogo -> Super Força -> Raio Congelante -> Invisibilidade -> null

// 3. Remover o poder "Raio Congelante" (ineficaz)
poderesHerois.removeByValue("Raio Congelante");
console.log("\nLista após remover o Raio Congelante:");
poderesHerois.printList();
// Escudo de Fogo -> Super Força -> Invisibilidade -> null

// 4. Verificar se o poder "Escudo de Fogo" está disponível
let escudoDeFogoDisponivel = poderesHerois.find("Escudo de Fogo");
if (escudoDeFogoDisponivel) {
    console.log("\nO poder Escudo de Fogo está disponível para uso!");
} else {
    console.log("\nO poder Escudo de Fogo não está disponível.");
}
// Saída: O poder Escudo de Fogo está disponível para uso!