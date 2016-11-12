var fs = require('fs');
var path = process.cwd() + "/" + "public";
var files = [];

var getFiles = function (path, files) {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files);
        } else {
            files.push(path + '/' + file);
        }
    });
}

getFiles(path, files)
console.log(files)


var size = 0;
var count = 0;
var arr = [];


var getSize = function () {

    files.forEach(function (file) {
        
        fs.stat(file, function (err, result) {
            count++;

            if (err) {
                console.log(err);
            } else {

                arr.push(result.size);

            }

        })

    });


    if (count === files.length) {

console.log("count = "+ count);
        for (var i = 0; i < arr.length; i++) {
            console.log("arr[] = " + arr[i]);
            size = size + arr[i];
        }
        console.log("sum = " + size);
    }
}

getSize();
