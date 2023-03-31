
// reversing in 1 loop.

let str = 'Hello boy, how are you doin?'
let output = "";
let temp = " ";
for(let i = 0; i <= str.length; i++) {
    if(str[i] === " " || str[i] === undefined) {
        output += temp;
        temp = " ";
    } else {
        temp = str[i] + temp;
    }
}

console.log(output)