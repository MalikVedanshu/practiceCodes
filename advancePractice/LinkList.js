

class List {
    constructor(){
        this.head = {
            value: "something",
            next: null
        }
        this.tail = this.head;
    }
    appendNode (nodeVal) {
        let newNode = {
            value: nodeVal,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

let list = new List();
list.appendNode("something Special")

console.log(list);
