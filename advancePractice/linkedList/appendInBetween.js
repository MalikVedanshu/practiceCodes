class LinkedList {
    constructor () {
        this.value = null;
        this.count = 0;
    }

    appendNodeInBeginning (val) {
        let anode = new LinkNode(val, this.value);
        this.value = anode;
        this.count+=1;
    }
}


class LinkNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let myList = new LinkedList();
myList.appendNodeInBeginning(10);
myList.appendNodeInBeginning(20);
myList.appendNodeInBeginning(30);



console.log(myList);