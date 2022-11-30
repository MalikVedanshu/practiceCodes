// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

function findLongestIncreasing(arr) {
    let comparr = [];
    for(let i = 0; i < arr.length -1; i++) {
        let streak = 1;
        let currentCompare = arr[i];
        let repeatJ = false;
        let jStartAgainWith = "";
        for(let j = i+1; j < arr.length; j++){
            if(currentCompare < arr[j]) {
                streak+=1;
                currentCompare = arr[j]; 
            }
            if(arr[i] < arr[j] && currentCompare > arr[j] && repeatJ === false){
                repeatJ = true;
                jStartAgainWith = j;
                // console.log(i,j);
            }
            if(j == arr.length - 1 && repeatJ == true) {
                currentCompare = arr[i];
                // j = jStartAgainWith;
                repeatJ == false;
                // jStartAgainWith = "";
                comparr.push(streak);
                streak = 0;
                console.log(i,jStartAgainWith);
            }
        }
        
    }
    console.log(comparr);
}

findLongestIncreasing([10,9,2,18,5,3,7,101,18,19,6]);
