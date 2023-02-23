/*
    118. Pascal's Triangle

    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    for(let i = 0; i < numRows; i++) {
        arr[i] = [1];
        for(let j = 1; j <= i; j++) {
            if(arr[i-1][j] == undefined) {
                arr[i][j] = arr[i - 1][j - 1]
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    return arr;
};

console.log(generate(5));