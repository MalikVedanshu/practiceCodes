/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let subArrs = [];
    let sumsOfSubArrs = [];

    for (let i = 0; i < nums.length; i++) {
        for(let j = i+1; j <= nums.length; j++) {
            subArrs.push(nums.slice(i,j));
        }
    }
    for(let k = 0 ; k < subArrs.length; k++) {
        let tempSum = 0;
        subArrs[k].forEach(ele => tempSum += ele);
        sumsOfSubArrs[k] = tempSum;
    }
    let idx = sumsOfSubArrs.findIndex(ele => ele === Math.max(...sumsOfSubArrs));
    return sumsOfSubArrs[idx];
};