// 566. Reshape the Matrix
// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size 
// r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the 
// wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the 
// original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let elnums = r * c;
    let oneDArr = [];
    for(let i = 0; i < mat.length; i++) {
        oneDArr.push(...mat[i]);
    }
    if(elnums !== oneDArr.length) {
        return mat;
    }
    let counter = 0;
    outputArr = [];
    for(let j = 0; j < r; j++) {
        temp = []
        for(let k = 0; k < c; k++) {
            temp.push(oneDArr[counter])
            counter+=1;
        }
        outputArr.push(temp);
    }
    return outputArr;
};

console.log(matrixReshape([[1,2],[3,4]],2,4))