/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let sumsOfSubArrs = nums[0] + nums[1];
    for (let i = 0; i < nums.length; i++) {
        let subArrs1 = nums.slice(i,nums.length);
        let subArrs2 = nums.slice();
    }

    
    return sumsOfSubArrs;
};


console.log(maxSubArray([-2,-1]));