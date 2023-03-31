let arr = [1, 2,3,4];
let temp = [];
helper(arr, 0, temp);

function helper(arr, idx, temp ) {
    
    if (idx == arr.length) {
        return;
    }

    temp.push(arr[idx]);
    console.log(temp);
    helper(arr, idx + 1, temp); //Include
    
    temp.pop();

    helper(arr, idx + 1, temp); //Skip
}