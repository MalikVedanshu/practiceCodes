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
    let maxInNums = Math.max(...nums);
    let sumArray = [];
    let sum = 0; 
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sumArray.push(sum)
    }
    let minSum = Math.maxInNums(...sumArray)
    let maxIdx = sumArray.findIndex(ele => ele === minSum);


    // if(maxSum < maxInNums) {
    //     console.log("notSkippingthis");
    //     return maxInNums;
    // }

    let sum2 = 0;
    let sumArr2 = [];
    for(let j = maxIdx; j >= 0; j--) {
        sum2 += nums[j]
        sumArr2[j] = sum2;
    }
    let maxFromLeft = Math.max(...sumArr2);
    
    return maxFromLeft;
    // console.log(maxIdx);
    
    // return maxFromLeft;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

