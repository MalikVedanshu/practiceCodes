/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let sumsOfSubArrs = [];

    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j <= nums.length; j++) {
            let sum = 0;
            let subArrs = [...nums.slice(i,j)];
            subArrs.forEach(ele => sum+=ele);
            sumsOfSubArrs.push(sum);
        }
    }

    let maxSum = Math.max(...sumsOfSubArrs);
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));