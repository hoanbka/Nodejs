var express = require('express');

var app = express();
var PORT= process.env.PORT || 3000;


app.get('/home', function(req,res){

	res.render('index');
})



app.use(express.static(__dirname+ '/public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(PORT, function(){

	console.log('server is listening at '+PORT);
})