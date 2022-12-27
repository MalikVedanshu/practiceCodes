let obj = {a: 1, b: 2, c: 3};

// console.log(...Object.keys(obj))

let obj3 = obj;

let obj2 = {
    d: 5,
    e: 6,
    f: 7
}


obj = obj2;
// obj = obj3
console.log(obj3.e)