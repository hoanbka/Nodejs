
console.log(doCapitalizeLetter("hello world from coderbyte")) ;

function doCapitalizeLetter(str){

	var words = str.split(" ");

	for(var i =0;i< words.length;i++){

		words[i]= words[i].substring(0,1).toUpperCase() + words[i].substring(1);

	}
	return words.join(" ");

}


function factorial(n){

	var result=1;

	for(var i =1 ;i<= n;i++){

		result =result *i;
	}

	return result;
}

factorial(4);
console.log(factorial(4));