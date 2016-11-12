
var fs = require('fs');

const promise = new Promise(function (resolve, reject) {
    
    fs.readFile('input.txt', function (err, text) {
     
      if (err) 
        reject(err);
     
      else
    
        resolve(console.log(text.toString()));
    })
  })

promise.then(function(text){
      console.log(text.toString());
  })