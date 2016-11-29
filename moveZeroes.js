/*Given an array nums, write a function to move all 0's to the end of it while sort ascending order of the non-zero elements.

For example, given nums = [0, 4, 0, 3, 12], after calling your function, nums should be [3, 4, 12, 0, 0].*/
/*You must do this in-place WITHOUT making a copy of the array.
Minimize the total number of operations.*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nums = [0, 1, 0, 3, 12];
var nums = [-1, 0, 0, 5, 0, 12, -7, 9];


var moveZeroes = function(nums) {

    var last = nums.length - 1;

    for (var i = 0; i <= last; i++) {

        if (nums[i] === 0) {

            while (i !== last) {

                if (nums[last] === 0) {
                    last--;
                } else if (nums[last] !== 0) {

                    var temp;
                    temp = nums[i];
                    nums[i] = nums[last];
                    nums[last] = temp;

                    last--;
                    break;
                }
            }
        }

    }

    var index = 0;
    for (var i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            index = i;
            break;
        }

    }

   
    for (var i = 0; i < index - 1; i++) {

        for (var j = i + 1; j < index; j++) {

            if (nums[i] > nums[j]) {
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }

        }
    }
    return nums;

};

console.log(moveZeroes(nums));


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


function moveZeroes_3( nums) {
        var x=0;
        for(var i=0;i<nums.length;i++){
            if(nums[i]!=0){
                nums[x++]=nums[i];
            }
        }
        for(var i=x;i<nums.length;i++){
            nums[i]=0;
        }
        return nums;
}

console.log(moveZeroes_3(nums));

function moveZeroes_4(nums){

     var zeroCount = 0;
    for(var i = 0 ; i< nums.length; i++) {
        if (nums[i] == 0) {
            zeroCount++;
        } else if (zeroCount > 0 ){
            nums[i-zeroCount] = nums[i];
            nums[i] = 0;
        }
    }

    return nums;
}

console.log(moveZeroes_4(nums));