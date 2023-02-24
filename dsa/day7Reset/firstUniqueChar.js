/*
    387. First Unique Character in a String

    Given a string s, find the first non-repeating character in it and return its index. 
    If it does not exist, return -1.

    Example 1:
    Input: s = "leetcode"
    Output: 0

    Example 2:
    Input: s = "loveleetcode"
    Output: 2

    Example 3:
    Input: s = "aabb"
    Output: -1

    Constraints:

    1 <= s.length <= 105
    s consists of only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]] !== undefined) {
            obj[s[i]] = true;
            obj[`blank${i}`] = 'blank';
        } else {
            obj[s[i]] = false;
        }
    }
    let output = -1;
    let temp = -1;
    for(let j in obj) {
        temp +=1;
        if(obj[j] === false) {
            output = temp;
            return output;
        }
    }
    return output;

    
};

console.log(firstUniqChar('leetcode'))