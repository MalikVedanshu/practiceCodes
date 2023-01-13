class linkedList {
    constructor() {
        this.value = null
        this.length = 0
    }
    appendNodeInBeginning(val) {
        let x = new linkListNode(val, this.value);
        this.value = x;
        this.length += 1;
    }

    appendNodeInBetween(insertNode, idx) {
        if(idx > this.length || idx < 1) {
            return "Invalid Index";
        }
        let count = 1;
        let currNode = this.value;
        let nextNode = currNode;
        while (count < idx) {
            nextNode = nextNode.next;
            count+=1;
        }
    }
}

class linkListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let num = new linkedList();
num.appendNodeInBeginning(10);
num.appendNodeInBeginning(20);
num.appendNodeInBeginning(30);
let num2 = num.appendNodeInBetween(2000, 1);
console.log(num2);