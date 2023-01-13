class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    appendNode (val) {
        let anode = new linkedNode(val, this.head);
        this.head = anode;
        this.length+=1;
    }
    appendAtEnd (val) {
        let count = 0;
        let anode = new linkedNode(val, null);
        let data = this.head;
        while (count < this.length - 1) {
            data = data.next;
            count+=1;
        }
        data.next = anode;
        this.length+=1;
    }

    appendInBetween (val, idx) {
        let data = this.head;
        if(idx === 1) {
            let insertVal = new linkedNode (val, data);
            this.head = insertVal;
            return;
        }
        
        while(idx > 1) {
            if(idx === 2) {
                let insertVal = new linkedNode (val, data.next);
                data.next = insertVal;
                idx-=1;
            } else {
                data = data.next;
                idx-=1;
            }
            console.log(`Value => ${data.value} and Count => ${idx} `)
        }
        console.log(`Value => ${data.value} and Count => ${idx} `)

        
    }
}

class linkedNode {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}

let numlist = new linkedList();
numlist.appendNode(3);
numlist.appendNode(10);
numlist.appendNode(20);
numlist.appendAtEnd(500);
numlist.appendAtEnd(472);
numlist.appendAtEnd(4545);

numlist.appendInBetween(555,1);
// numlist.appendInBetween(51,1);
console.log(JSON.stringify(numlist));

