function FirstReverse(str) { 

	var arr = str.split("");
	var res="";

	for(var i = arr.length-1;i>=0;i--){
		res= res.concat(arr[i]);
	}

	str=res;

  return str; 
         
}

function reverseString(str) { 

	var res ="";

	for(var i=0;i< str.length;i++){

		res= res.concat(str.charAt(str.length-1-i));
	}
  return res; 
         
}

console.log(reverseString("hello"));