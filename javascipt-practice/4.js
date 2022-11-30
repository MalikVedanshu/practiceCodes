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
    
    for (let i = 0; i < arr.length - 1; i++) {
        let repeatJ = false;
        let streak = 1;
        let compareWith = arr[i];
        let startAgainFrom;
        let repeatFrom;
        let prevStreak;
        let streakElements = [];
        let prevStreakElem = [];
        console.log('----------------------------------------------')
        console.log('executing for index', i, 'value', arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > compareWith && arr[j] > arr[i]) {
                streak += 1;
                streakElements.push(arr[j])
                console.log('streak is now:', streak,'because', compareWith,'and',arr[j], 'fulfill condition', 'next time we compare with', compareWith)
                compareWith = arr[j];
            } else if( arr[j] < compareWith && arr[j] > arr[i] && repeatJ === false) {
                repeatJ = true;
                repeatFrom = j;
                startAgainFrom = j;
                let count = 0;
                for(let k = 0; k < streakElements.length; k++) {
                    if(streakElements[k] > arr[j]) {
                        prevStreakElem = streakElements.slice(0,k);
                        prevStreak = k+1;
                        break;
                    }
                }
                console.log('code must calculate value for', arr[i], 'from', arr[j], 'again')
            }
            else {
                console.log('skipping', arr[i], 'with', arr[j]);
            }
            if(j == (arr.length - 1)){
                allStreaks.push(streak);
                if(repeatJ === true){
                    j = repeatFrom;
                    repeatJ= false;
                    streak = prevStreak;
                    compareWith = arr[j];
                    streakElements = prevStreakElem;
                }
            }
        }
        // repeatJ = true;
    }
    
    console.log(allStreaks)
}
longestStrictlyIncreasing([10, 9, 2, 5, 3, 7, 101, 18, 21, 25,10,11,12])