var async = require("async");

function step1(callback) {
    setTimeout(function() {
        console.log('Done async step 1: (' + Date() + ')');
        callback(/*err=*/null, /*input1=*/1, /*input2=*/2);
    }, 1000);
}

function step2(input1, input2, callback) {
    setTimeout(function() {
        console.log('Done async step 2: (' + Date() + ')');
        callback(/*err=*/null, /*input3=*/input1+input2+3);
    }, 1000);
}

function step3(input3, callback) {
    setTimeout(function() {
        console.log('Done async step 3: (' + Date() + ')');
        callback(/*err=*/null, /*result=*/input3+4);
    }, 1000);
}

// result is whatever is passed from step3 callback
function finalCallback(err, result) {
    // result == 10 (1 + 2 + 3 + 4)
    console.log('result: ' + result);
}

async.waterfall([
        function(callback) { 
            step1(callback);
        }, 
        function(input1, input2, callback) { 
            step2(input1, input2, callback);
        }, 
        function(input3, callback) { 
            step3(input3, callback);
        }, 
    ],
    finalCallback
);