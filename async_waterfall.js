/*The async.waterfall() method allows you to pass values between the functions in a trickle-down manner.
The waterfall() method is useful when you need the results of a previous function to perform an operation with the next 
function in the series.*/



var async = require('async');

async.waterfall([
  function(callback) {
    callback(null, 12, 15);
  },
  function(a, b, callback) {
    callback(null, (a + b) * 10);
  },
  function(cc, callback) {
    callback(null, Math.sqrt(cc));
  }
], function(error, c) {
  console.log(c);
});

var array =[];

async.waterfall([

  function(callback){

      for(var i =0;i< 10;i++){

        array.push(i);
      }
      callback(null, array);

  }, function(res, callback){

      array.pop();
      callback(null,array);

  }, function(res2, callback){

      array.pop();
      array.push(100);
      callback(null, array);
  }

  ], function(err, result){

    if(err){
      console.log(err);
    }else{
      console.log(result);
    }
  })
