class LinkedList {
    constructor() {
        this.head = null
        this.length = 0;
    }

    insertAtHead(data) {
        let newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }
    insertAtEnd(data) {
        let current = this.head;
        for(let i = 0; i < this.length -1; i++) {
            current = current.next;
            if(i === this.length - 1) {
                current.value = new LinkedList(data, null)
            }
        }
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

let x = new LinkedList()
x.insertAtEnd(6);
x.insertAtEnd(11);
x.insertAtEnd(18);
x.insertAtEnd(21);
x.insertAtEnd(60);
console.log(x);
