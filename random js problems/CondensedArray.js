// function condense(nums) {
//     while (nums.length > 1) {
//         let condensed = [];
//         for (let i = 0; i < nums.length - 1; i++) {
//             condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
//         }
//         nums = condensed;
//     }
//     console.log(nums[0])
// }

function condense(nums) {
    if (nums.length === 1) {
        console.log(nums[0]);
        return;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = Number(nums[i]) + Number(nums[i + 1]);
    }
    nums.pop();
    condense(nums);
}
