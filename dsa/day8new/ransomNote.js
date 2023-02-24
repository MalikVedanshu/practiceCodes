/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i = 0; i < ransomNote.length; i++) {
        let matched = false;
        for(let j = 0; j < magazine.length; j++) {
            if(ransomNote[i] === magazine[j]) {
                matched = true;
                magazine = magazine.slice(0,j) + magazine.slice(j+1, magazine.length);
                console.log(magazine);
                break;
            }
        }
        if(matched === false) {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aab", "baa"))