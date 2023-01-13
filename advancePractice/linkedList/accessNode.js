class linkedList {
    constructor() {
        this.value = null;
        this.count = 0;
    }
    appendNode(val) {
        this.value = {value : val, next: this.value};
        this.count+=1;
    }
    accessNode(num) {
        if(this.count === 0) return "List is empty";
        if(num > this.count) return "Invalid index input."
        let xnodeval = this.value;
        let counter = 0;
        while(counter <= num) {
            
            if(counter === num) {
                return xnodeval;
            }
            xnodeval = xnodeval.next;
            counter+=1;
            
        }
    }
}
let x = new linkedList();

x.appendNode(10);
x.appendNode(20);
// x.appendNode(30);
// x.appendNode(40);
// x.appendNode(50);
let y = x.accessNode(1);
// y = x.accessNode(0);
console.log(y);
