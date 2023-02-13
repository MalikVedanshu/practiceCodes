const colors = ['red', 'green', 'blue'];
const [firstColor, ,secondColor] = colors;

// console.log(firstColor); // red
// console.log(secondColor); // blue

// console.log(0 == false);

let x;

// console.log(x + '2');

let arr = {a: "1", b: "2"}

// console.log(arr instanceof Object);

class Motorcycle {
    constructor(price, electric) {
        this.price = price,
        this.electric = electric
    }
}

class Bike {
    constructor(price, electric) {
        this.price = price,
        this.electric = electric
    }
}

let atlas = new Motorcycle(5000, false);

console.log(atlas.price, atlas.electric);

console.log(atlas instanceof Motorcycle);

