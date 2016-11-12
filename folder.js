var fs = require("fs");

var tree = function (dir, done) {
    var results = {
        "path": dir
        , "children": []
    };
    fs.readdir(dir, function (err, list) {
        if (err) {
            return done(err);
        }
        var pending = list.length;
        if (!pending) {
            return done(null, results);
        }
        list.forEach(function (file) {
            fs.stat(dir + '/' + file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    tree(dir + '/' + file, function (err, res) {
                        results.children.push(res);
                        if (!--pending) {
                            done(null, results);
                        }
                    });
                } else {
                    results.children.push({"path": dir + "/" + file});
                    if (!--pending) {
                        done(null, results);
                    }
                }
            });
        });
    });
};

module.exports = tree;



