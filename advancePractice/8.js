
// function printAll(p,q) {
//     for(let i = p; i <= q; i++) {
//         console.log(i)
//     }
// }
// console.time()
// printAll(10,20);
// console.timeEnd();



// function printRecursively(p,q) {
//     if(p > q) return;
//     console.log(p)
//     printRecursively(p+=1, q);
// }
// console.time();
// printRecursively(10,20);
// console.timeEnd();



// function printArray(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// printArray([4,3,7,9,10,8])

// function printRecursiveArray(arr,i) {
//     if(i >= arr.length) return;
//     console.log(arr[i])
//     printRecursiveArray(arr, i+=1);
// }
// printRecursiveArray([3,4,5,2,4,5], 0);


// function findMax(arr) {
//     let max = arr[0];
//     let j;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] >= max){
//             max = arr[i];
//             j = i;
//         } 
//     }
//     return {max: max, index: j};
// }

// console.log(findMax([7,6,'hello']));


function add2DArray(arr1,arr2) {
    let addedArray = [];
    for(let i = 0; i < arr1.length; i++) {
        addedArray[i] = [];
        for(let j = 0; j < arr2.length; j++) {
            addedArray[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    console.log(addedArray);
}

add2DArray([[1,2,3], [4,5,6], [7,8,9]], [[21,22,23], [24,25,26], [18,19,10]])

