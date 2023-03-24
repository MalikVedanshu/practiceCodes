
let array = [78, 2, 5, 84,5,1,2,1,77,1,6,55,4,1,2,33, 3, 5 ];


function sortArr(arr, start, end) {
    if(start >= arr.length - 1) {
        if(end <= 1) {
            return;
        }
        start = 0;
        end = end - 1;
    };

    if(arr[start] > arr[start + 1]) {
        [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]]
    }

    console.log(arr);

    sortArr(arr, start + 1, end);
}

sortArr(array, 0, array.length)