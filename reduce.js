var async = require('async');

async.waterfall([

    function(callback) {

        var arr = [];

        for (var i = 0, max = 50; i < max; i++) {
            arr.push(Math.round(Math.random() * max))
        }

        callback(null, arr);

    },
    function(res, callback) {

        var sum = res.reduce(function(a, b) {
            return a + b;
        })

        callback(null, sum);

    }


], function(err, result) {


    if (err) {
        return console.log(err);
    }

    console.log("sum = " + result);
})

//

var arr2 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr2.length; i++) {
    var num = arr2[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);

//
var myMap = new Map();

for (var i = 0; i < arr2.length; i++) {

    if (myMap.has(arr2[i])) {
        myMap.set(arr2[i], myMap.get(arr2[i]) + 1);
    } else {
        myMap.set(arr2[i], 1);
    }
}

console.log(myMap);
