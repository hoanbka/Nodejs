var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');

}).listen(3000, function(){
    console.log("server is listening on 3000");
});
