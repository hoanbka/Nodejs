
var async= require("async");

var strs= ["899009.67 vnd","899009.67.vnd","899009.67","899009.67  vnd", " vnd 899009.67  vnd"];

strs.forEach(function(element){


	 if(element.includes(" ")){

		element = element.split(" ")[0].concat("Đ");
		console.log(element);

	}else if(element.includes(".vnd")){

		element=element.replace(".vnd","Đ");
		console.log(element);
	}

})

var re = /(\w+\s\w+$#)/
var str = 'John Smith#$';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);