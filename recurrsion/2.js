let arr = [1, 3, 5, 4, 2, 8];
let temp = []
helper(arr, 0, temp, 6)

function helper(arr, idx, temp, tab = '') {
    // console.log(arr[idx])
    if (idx == arr.length) {
        return;
    }

    temp.push(arr[idx]);
    console.log(temp);
    helper(arr, idx + 1, temp, tab + '\t'); //Include
    temp.pop();

    helper(arr, idx + 1, temp, tab + '\t'); //Skip

}