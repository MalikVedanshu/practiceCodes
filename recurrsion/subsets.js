let arr = [1,2,3,4];
let temp = []
helper(arr, 0, temp, 6)

function helper(arr, idx, temp, tab = '') {
    console.log(tab, arr[idx], '| ', idx, '| ', temp.join(''))
    if (idx == arr.length) {
        console.log(temp);
        return;
    }

    temp.push(arr[idx]);
    helper(arr, idx + 1, temp, tab + '\t'); //Include
    temp.pop();

    helper(arr, idx + 1, temp, tab + '\t'); //Skip

}