// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if(obj[`${target - nums[i]}`] !== undefined) {
            obj[`${target - nums[i]}`].push(i)
        } else {
            obj[`${target - nums[i]}`] = [i];
        } 
    }
    console.log(obj);
    
    let output  = [];
    for(let j = 0; j < nums.length; j++) {
        if(obj[nums[j]] !== undefined && obj[target - nums[j]] !== undefined && obj[nums[j]] !== obj[target - nums[j]]) {
            output.push(obj[nums[j]][0])
        } else {
            if(obj[nums[j]] !== undefined && obj[nums[j]].length === 2 && target/2 === nums[j] ) {
                output = obj[nums[j]]
                break;
            }
        }
    }
    return output.sort();
    
    
    
};

console.log(twoSum([3,3],6));

