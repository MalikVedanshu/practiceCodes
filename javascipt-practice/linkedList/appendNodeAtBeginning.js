class alinkedList {
    constructor() {
        this.value = null;
        this.count = 0;
    }
    nodeAdder(val) {
        let x = new linklistNode(val, this.value);
        this.value = x;
        this.count+=1;
    }
}
    

class linklistNode {
    constructor(nodeval, next) {
        this.nodeval = nodeval;
        this.next = next;
    }
}

let x = new alinkedList();
x.nodeAdder(5);
x.nodeAdder(10);
console.log(x);