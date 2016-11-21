var async = require("async");

async.waterfall([

  function(callback){

      var arr = [];
      for (var i=0, max=40; i<max; i++) {
          arr.push(Math.round(Math.random() * max))
      }

      callback(null, arr);

  }, function(res1, callback){

      
      var primes=[];

      for(var i =0;i< res1.length;i++){

          var count =0;
          for(var j=1;j<=res1[i];j++){

            if(res1[i]%j==0){
              count++;
            }
          }

          if(count==2){
            primes.push(res1[i]);
          }else{
            continue;
          }
      }

      callback(null, primes);
      
  }, function(res2, callback){

  	res2.sort(function(a,b){

		if(a< b){
  			return -1;
  		}else if(a > b){
  			return 1;
  		}else{
  			return 0;
  		}

  	});

  	callback(null, res2);
  }


  ], function(err, result){

  if(err){
    return console.log(err);
  }

  console.log(result);

})