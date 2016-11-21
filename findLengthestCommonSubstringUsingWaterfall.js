var str1 = "ahelloworld123jjhelloworld2";
var str2 = "helloworld1sdfggkkhelloworld2k";

var subStringArr1 = [];
var commonSub = [];
var async = require('async');

async.waterfall([

    function (callback) {

        for (var i = 0; i < str1.length; i++) {

            for (var j = i + 1; j <= str1.length; j++) {

                subStringArr1.push(str1.substring(i, j));
            }
        }
        callback(null, subStringArr1);

    }, function (res1, callback) {

        // res1 =subStringArr1;
        res1.sort(function (a, b) {
            return b.length - a.length;
        });

        callback(null, res1);

    }, function (res2, callback) {

        //res2 =res1;
        for (var i = 0; i < res2.length; i++) {

            if (str2.includes(res2[i])) {

                commonSub.push(res2[i]);

                if (res2[i].length < commonSub[0].length) {
                    commonSub.pop();
                    break;
                }
            }
        }
        callback(null, commonSub);
    }


], function (err, results) {

    if (err) {
        return console.log(err);
    }

    console.log("lengthest common substring of two given string are :")
    results.forEach(function (element) {
        console.log(element);
    })
})
