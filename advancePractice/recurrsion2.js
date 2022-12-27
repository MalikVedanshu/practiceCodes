function countdown (n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

// countdown (8);

function recursiveCountDown(n) {
    if(n <= 0) {
        return;
    }
    consoleRecursion(n);
}

function consoleRecursion(m) {
    recursiveCountDown(m-1)
    console.log(m)
    
    
}

consoleRecursion(10);

