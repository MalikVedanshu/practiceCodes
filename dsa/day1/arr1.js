// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 0 || nums.length === 1) {
        return false;
    }

        for(let i = 0; i < nums.length - 1; i++) {
            for(let j = i+1; j < nums.length; j++) {
                if(nums[i] === nums[j] && i !== j) {
                    return true;
                }
                if(i === nums.length - 2 && j === nums.length - 1) {
                    return false;
                }
            }
        }
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
