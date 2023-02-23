/* 

    You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.

*/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let output = false;
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] === target) {
                    output = true;
                    return output;
                }
            }
        }
    }
    return output;
};