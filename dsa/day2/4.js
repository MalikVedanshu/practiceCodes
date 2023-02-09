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
if(maxInTheLeft > maxInTheRight) {

    let theIndex = leftRangeSums.findIndex(ele => ele === maxInTheLeft);
    let calcSum = 0;

    for(let j = theIndex; j >= 0; j--) {
        calcSum += nums[j]
        myRange.push(calcSum);
    }
} else {

    let theIndex = rightRangeSums.findIndex(ele => ele === maxInTheRight);
    let calcSum = 0;

    for(let j = theIndex; j < nums.length; j++) {
        calcSum += nums[j]
        myRange.push(calcSum);
    }
}


return Math.max(...myRange);