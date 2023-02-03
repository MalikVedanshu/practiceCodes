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
// var maxSubArray = function(nums) {
//     if(nums.length === 1) {
//         return nums[1];
//     }
//     let updatedNums = [...nums];
//     let subArratFound = false;

//     while(subArratFound === false) {
//         let updatedSum = 0;
//         updatedNums.forEach(ele =>  updatedSum += ele);

//         let arrRemoveOne = updatedNums.slice(1, updatedNums.length);
//         let arrRemoveLast = updatedNums.slice(0, updatedNums.length - 1);

//         let sumRemoveOne = 0;
//         let sumRemoveLast = 0;

//         arrRemoveOne.forEach(ele => sumRemoveOne += ele)
//         arrRemoveLast.forEach(ele => sumRemoveLast += ele)

//         if(sumRemoveOne > updatedSum || sumRemoveLast > updatedSum ) {
//             sumRemoveOne > sumRemoveLast ? updatedNums.splice(0,1) : updatedNums.splice(updatedNums.length - 1, 1);
//         }
//         else {
//             return updatedNums;
//         }
        
//     }
    
// };

var maxSubArray = function(nums) {
        if(nums.length === 1) {
        return nums[1];
    }
    let compareArr = [];

    for(let i = 0; i < nums.length; i++) {
        compareArr[i] = [];
        if(i < nums.length/2) {
            let reading1 = nums.slice(i, nums.length - i);
            let reading1sum = 0; 
            reading1.forEach(ele => reading1sum+=ele);
            compareArr[i].push([reading1sum, ...reading1]);
        }
        else {
            compareArr[i].push(null);
        }
        
        let reading2 = nums.slice(i, nums.length);
        let reading2sum = 0;
        reading2.forEach(ele => reading2sum+=ele);
        compareArr[i].push([reading2sum, ...reading2]);


        let reading3 = nums.slice(0,nums.length - i);
        let reading3sum = 0;
        reading3.forEach(ele => reading3sum+=ele);
        compareArr[i].push([reading3sum, ...reading3]);

    }
    return compareArr;

}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

