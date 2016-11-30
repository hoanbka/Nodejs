/*Given an array nums, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 4, 0, 3, 12], after calling your function, nums should be [4, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.*/



function moveZeroes_2(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            var temp = nums[j];
            nums[j++] = nums[i];
            nums[i] = temp;
        }
    }
    return nums;
}

console.log(moveZeroes_2(nums));


function moveZeroes_3(nums) {
    var x = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[x++] = nums[i];
        }
    }
    for (var i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}


function moveZeroes_4(nums) {

    var zeroCount = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroCount++;
        } else if (zeroCount > 0) {
            nums[i - zeroCount] = nums[i];
            nums[i] = 0;
        }
    }

    return nums;
}

console.log(moveZeroes_4(nums));