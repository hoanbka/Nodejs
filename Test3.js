var fs = require('fs');

var f = function(file, callback){

	fs.readFile(file,'utf8', function(err,result){

		if(err){

			console.log(err);
		}else{

			callback(result);
		}

	})

}

f('app.js', function(handle){
	console.log(handle);
})
console.log("hello Hoan Mr");

