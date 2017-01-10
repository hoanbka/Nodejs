/**
 * Created by Albert on 1/10/2017.
 */
var async = require('async');
const fs = require('fs');
function getSizeFile(path) {
	var size;
	var stats = fs.statSync(path);
	size = stats.size;
	return size;
}
function getSizeFolder(path) {

	var size = 0;
	var stats = fs.statSync(path);
	if (stats.isFile()) {
		console.log(path + size);
		return getSizeFile(path);
	} else {
		var array = [];
		array = fs.readdirSync(path);
		while (array.length != 0) {
			var child = array.pop();
			var stats = fs.statSync(path + '/' + child);
			if (stats.isFile()) {
				size += getSizeFile(path + '/' + child)
			} else {
				var array2 = [];
				array2 = fs.readdirSync(path + '/' + child);
				array2.forEach(name => {
					array.push(child + '/' + name);
				})
			}
		}
	}
	return size;

}


var size = getSizeFolder('./');
console.log("size of the folder = " + size);
