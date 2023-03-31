function printCombination(indx, arr) {
    if(indx >= 8){
        console.log(arr.join("-"))
        return;
    }
    
    arr.push("HEAD");
    printCombination(indx + 1, arr);
    arr.pop();
    arr.push("TAIL");
    printCombination(indx + 1, arr);
    arr.pop();
}

printCombination(0, []);
