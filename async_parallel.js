var async =require("async");

async.parallel([

	function(callback){

		callback(null, "Hello Hoan Nguyen");

	}, function(callback){

		callback(null,"PhD student in Paris VI");
	}

	], function(err, result){

	if(err){
		return console.log(err);
	}

	console.log(result);
})


// vi du 2:
async.parallel([

	function(callback){

		var x = 10;
		if(x%2==0){
			x =x *2;
		}else{
			x =x *3;
		}

		callback(null, x);

	}, function(callback){

		var y = 5;
		
		callback(null, y+2);

	}


	], function(err, result){


	if(err){
		return console.log(err);
	}

	console.log(result);
})