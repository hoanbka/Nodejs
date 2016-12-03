/*Given an array nums, write a function to move all 0's to the end of it while sort ascending order of the non-zero elements.

For example, given nums = [0, 4, 0, 3, 12], after calling your function, nums should be [3, 4, 12, 0, 0].*/
/*You must do this in-place WITHOUT making a copy of the array.
Minimize the total number of operations.*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nums = [0, 1, 0, 3, 12];
// var nums = [-1, 0, 0, 5, 0, 12, -7, 9];
var nums = [0, 0, -1, 0, 9, 5, -3];


var moveZeroes = function(nums) {

    var last = nums.length - 1;

    for (var i = 0; i <= last; i++) {

        if (nums[i] === 0) {

            while (i !== last) {

                if (nums[last] === 0) {
                    last--;
                } else {

                    var temp = nums[i];
                    nums[i] = nums[last];
                    nums[last] = temp;

                    last--;
                    break;
                }
            }
        }

    }

    console.log(nums);
    

    for (var i = 0; i < nums.length-1; i++) {

        for (var j = i + 1; j < nums.length; j++) {

            if ((nums[i] > nums[j])&&(nums[j]!==0)) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }

        }
    }

    return nums;

};

console.log(moveZeroes(nums));


///Solution 2:
// Push all non-zero elements to a queue,
//then add zero-elements to queue.
// then add queue to array.
// var nums = [0, 0, -1, 0, 9, 5, -3];
// var queue = [];


// var moveZeroes = function(nums) {

//     for(var i in nums){

//         if(nums[i]!==0){
//             queue.push(nums[i]);
//         }
//     }

//     for(var i in nums){

//         if(nums[i]===0){
//             queue.push(nums[i]);
//         }
//     }
    
//     nums =queue;
//     return nums;

// }

// console.log(moveZeroes(nums));

