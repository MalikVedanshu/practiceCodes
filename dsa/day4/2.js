// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many 
// times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements 
// into the memory at once?

var intersect = function(nums1, nums2) {
    let obj = {}
    let biggerArray;
    if(nums1.length <= nums2.length) {
        for(let i = 0; i < nums1.length; i++) {
            if(obj[nums1[i]] === undefined) {
                obj[nums1[i]] = {}
                obj[nums1[i]][`${i}`] = true;
            } else {
                obj[nums1[i]][`${i}`] = true;
            }
        }
        biggerArray = nums2;
    } else {
        for(let i = 0; i < nums2.length; i++) {
            if(obj[nums2[i]] === undefined) {
                obj[nums2[i]] = {}
                obj[nums2[i]][`${i}`] = true;
            } else {
                obj[nums2[i]][`${i}`] = true;
            }
        }
        biggerArray = nums1;
    }
    console.log(biggerArray,obj);
    let temp = [];
    let output = [];
    for(let j = 0; j < biggerArray.length; j++) {
        if(obj[biggerArray[j]] !== undefined ) {
            if(temp.length === 0) {
                temp.push(biggerArray[j])
            } else {
                if(obj[biggerArray[j]][temp.length - 1] !== undefined) {
                    
                }
            }
        } else {
            if(temp.length > 0 && temp.length >= output.length) {
                output = temp;
                temp = [];
            }
        }
    }
    return output;


};

console.log(intersect([1,2,2,1], [2,2]))

