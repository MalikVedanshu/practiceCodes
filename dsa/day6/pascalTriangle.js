/* 
    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
    Example 2:

    Input: numRows = 1
    Output: [[1]]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [];
    let temp = []
    for(let i = 0; i < numRows; i++) {
        if(i === 0) {
            temp = [1];
        } else {
            temp = output[i-1]
        }
        let arr = [];
        for(let j = 0; j < i; j++) {
            arr.push((temp[i] + temp[i + 1]))
        }
        output.push(temp);
    }
    return output;
};

console.log(generate(5));
