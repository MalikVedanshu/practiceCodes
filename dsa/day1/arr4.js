/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums[0];
    }
    let currentSum = 0;
    nums.forEach(ele => currentSum += ele);
    console.log(currentSum);

    let sumsOfSubArrs = [currentSum];

    let startIdx = 0;
    let endIdx = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if(currentSum - nums[startIdx] > currentSum - nums[endIdx]) {
            currentSum = currentSum - nums[startIdx]
            console.log(`left is eliminated ${currentSum}`);
            startIdx +=1;
            
        } else {
            currentSum = currentSum - nums[endIdx];
            console.log(`right is eliminated ${currentSum}`);
            endIdx -= 1;
        }
        sumsOfSubArrs.push(currentSum);
        console.log(sumsOfSubArrs)
    }

    
    return Math.max(...sumsOfSubArrs);
};


console.log(maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]));