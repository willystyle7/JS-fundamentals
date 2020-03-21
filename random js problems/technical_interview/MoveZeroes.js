// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// You must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    // nums = nums.filter(e => e !== 0).concat(nums.filter(e => e === 0));
    // return nums.filter(e => e !== 0).concat(nums.filter(e => e === 0));
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

// let nums = [0, 1, 0, 3, 12];
let nums = [0, 0, 1];
moveZeroes(nums);
console.log(nums);
