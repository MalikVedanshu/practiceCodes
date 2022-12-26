// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function greatestCommonDevisor (x,y) {
    if(y % x === 0) return x;
    if(x % y === 0) return y;

    let startnum;
    x < y ? startnum = y % x : startnum = y/2;
    
    startnum = Math.floor(startnum);

    for(let i = startnum; i > 0; i--) {
        if((x % i === 0) && (y % i === 0)) return i; 
    }
}



// console.log(greatestCommonDevisor(96,36));
console.log(96 % 36);