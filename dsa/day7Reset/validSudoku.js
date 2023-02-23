/*
    36. Valid Sudoku
    Medium
    8K
    881
    Companies
    Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
    Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.
    
    Example 2: 

        Input: board = 
            [["5","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]]
            Output: true

    Example 2: 
        
        Input: board = 
            [["8","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]]
            Output: false
            Explanation: Same as Example 1, except with the 5 in the top left corner being 
            modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid  
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let result = true;
    let sb1 = {}
    let sb2 = {}
    let sb3 = {}
    for (let i = 0; i < 9; i++) {
        let obj1 = {}
        let obj2 = {}
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (obj1[board[i][j]] !== undefined) {
                    result = false;
                    return result;
                }
                obj1[board[i][j]] = false;
                if (j < 3) {
                    if (sb1[board[i][j]] !== undefined) {
                        result = false;
                        return result;
                    }
                    sb1[board[i][j]] = false;
                } else if (j >= 3 && j < 6) {
                    if (sb2[board[i][j]] !== undefined) {
                        result = false;
                        return result;
                    }
                    sb2[board[i][j]] = false;
                } else {
                    if (sb3[board[i][j]] !== undefined) {
                        result = false;
                        return result;
                    }
                    sb3[board[i][j]] = false;
                }
            }
            if (board[j][i] !== '.') {
                if (obj2[board[j][i]] !== undefined) {
                    result = false;
                    return result;
                }
                obj2[board[j][i]] = false;
            }
        }
        if (i === 2 || i === 5) {
            sb1 = {}
            sb2 = {}
            sb3 = {}
        }
    }
    return result;

};
console.log(isValidSudoku(
    [[".",".",".",".","4",".","9",".","."],
    [".",".","2","1",".",".","3",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","3"],
    [".",".",".","2",".",".",".",".","."],
    [".",".",".",".",".","7",".",".","."],
    [".",".",".","6","1",".",".",".","."],
    [".",".","9",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","9","."]]

))