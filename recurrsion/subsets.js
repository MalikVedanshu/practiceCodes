let arr = [1, 3, 5, 4, 2, 8];
let temp = []
helper(arr, 0, temp, 6)

function helper(arr, idx, temp, tab = '') {
    console.log(tab, arr[idx], '| ', idx, '| ', temp.join(''))
    if (idx == arr.length) {
        console.log(tab, '--------->', temp);
        return;
    }

    temp.push(arr[idx]);
    helper(arr, idx + 1, temp, tab + '\t'); //Include
    temp.pop();

    helper(arr, idx + 1, temp, tab + '\t'); //Skip
    
}