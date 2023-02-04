/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    

    let totalSum = 0;
    nums.forEach(ele => totalSum += ele);
    let allSums = [totalSum];
    let leftSideSubArraySum = [totalSum];
    let rightSideSubArraySum = [totalSum];
    

    for (let i = 0; i < nums.length - 1; i++) {
        rightSideSubArraySum[i+1] = rightSideSubArraySum[i] - nums[i];
        leftSideSubArraySum[i+1] = leftSideSubArraySum[i] - nums[nums.length - 1 - i];
        
    }

    rightSideSubArraySum.shift();
    leftSideSubArraySum.shift();
    return [leftSideSubArraySum, rightSideSubArraySum];
};


console.log(maxSubArray([10,20,30,40,50,60]));