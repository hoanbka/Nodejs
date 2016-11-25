/*
Using the JavaScript language, have the function Consecutive(arr) take 
the array of integers stored in arr and return the minimum number of 
integers needed to make the contents of arr consecutive from the lowest 
number to the highest number. For example: If arr contains [4, 8, 6] 
then the output should be 2 because two numbers need to be added to the 
array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
Negative numbers may be entered as parameters and no array will have 
less than 2 elements. 
Input = 5,10,15 Output = 8
Input = -2,10,4 Output = 10
*/
var arr = [2, 2, 10, 4];

var async = require('async');

async.waterfall([

    function(callback) {


        if (arr.length === 1) {
            var err = new Error("array has only one element");

            callback(err, null);
        } else {

            arr.sort(function(a, b) {

                return (a === b) ? 0 : (a < b) ? -1 : 1;
            })

            callback(null, arr);
        }


    },
    function(res, callback) {

        var max = res[res.length - 1];
        var min = res[0];

        var numbersBetween = [];

        for (var j = min; j <= max; j++) {
            if (res.indexOf(j) == -1) {
                numbersBetween.push(j);
            };
        }

        callback(null, numbersBetween);

    }

], function(err, result) {

    if (err) {
        return console.log(err);
    }

    console.log(result);
})