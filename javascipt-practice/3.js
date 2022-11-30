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


function longestStrictlyIncreasing(arr) {
    let allStreaks = []
    for(let i = 0; i < arr.length-1; i++) {
        let k = i;
        let streak = 1;
        let prevStreak, kPrev, jPrev;
        let repeatJ = false;
        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                if(arr[j] > arr[k]){
                    streak+=1;
                    k = j;
                } else {
                    if(repeatJ == false) {
                        prevStreak = 1;
                        jPrev = j;
                        kPrev = i;
                        repeatJ = true;
                    }
                }
            }
            console.log('***', arr[i], arr[j],streak, '***');
            if(j == arr.length-1) {
                allStreaks.push(streak);
                if(repeatJ == true) {
                    j = jPrev;
                    k = kPrev;
                    streak = prevStreak;
                    repeatJ = false;
                }
            }
        }
           
    }
    console.log(allStreaks)
}
longestStrictlyIncreasing([10,9,2,5,3,7,101,18,21,25])