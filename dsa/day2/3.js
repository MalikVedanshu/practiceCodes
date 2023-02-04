// 53. Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let sumFromLeft = 0;
    let leftRangeSums = []

    let sumFromRight = 0;
    let rightRangeSums = []
    for(let i = 0; i < nums.length; i++) {
        sumFromLeft += nums[i]
        leftRangeSums[i] = sumFromLeft;

        sumFromRight += nums[nums.length - i - 1];
        rightRangeSums[nums.length - i - 1] = sumFromRight;
    }
    let maxInTheLeft = Math.max(...leftRangeSums);
    let maxInTheRight = Math.max(...rightRangeSums);

    let myRange = [];
    let finalRange = [];
    if(maxInTheLeft > maxInTheRight) {

        let theIndex;
        for(let k = 0; k < leftRangeSums.length; k++) {
            if(leftRangeSums[k] === maxInTheLeft) {
                theIndex = k;
            }
        }
        let calcSum = 0;
        finalRange = nums.slice(0, theIndex+1);
        for(let j = theIndex; j >= 0; j--) {
            calcSum += nums[j]
            myRange.push(calcSum);
        }
    } else if(maxInTheLeft < maxInTheRight) {
        let theIndex = rightRangeSums.findIndex(ele => ele === maxInTheRight);
        let calcSum = 0;
        finalRange = nums.slice( theIndex, nums.length);

        for(let j = theIndex; j < nums.length; j++) {
            calcSum += nums[j]
            myRange.push(calcSum);
        }
    }
    else {
        return "coming here";
    }
    let subsetMax =  Math.max(...myRange);
    let individualMax = Math.max(...finalRange);
    if(subsetMax >= individualMax) {
        return subsetMax;
    } else {
        return individualMax;
    }
}

console.log(maxSubArray([-1,6,7,-7,-2,-6,-1,3,4,2,6,-3,-8,-1,7]))

