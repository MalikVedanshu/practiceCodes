class linkedList {
    constructor () {
        this.value = null;
        this.count = 0;
    }
    appendAtEnd(aval) {
        let x = new anode(this.value, aval)
        this.value = x;
        this.count+=1;
    }
}

class anode {
    constructor(value,next) {
        this.value = value;
        this.next = next;
    }
}

let num = new linkedList();
num.appendAtEnd(10);
num.appendAtEnd(20);
num.appendAtEnd(30);
console.log(num);
