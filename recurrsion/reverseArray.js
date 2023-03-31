

function arrReverse(arr, i) {
    if(i >= arr.length/2) return arr;
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    return arrReverse(arr, i + 1)
}

let arr = [1,2,3,4,5,9,10,11];

console.log(arrReverse(arr, 0));