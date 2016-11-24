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