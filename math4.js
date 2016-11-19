function SimpleSymbols(str) { 

  // "+d+=3=+s+"
  var boolean = true;
  for(var i=0;i< str.length;i++){

  		if((str.charAt(i)=="+")&&(str.charAt(i+1)=="+")||((str.charAt(i)=="=")&&(str.charAt(i+1)=="="))){
  			return false;
  		}
  }
  return boolean;
         
}

console.log(SimpleSymbols("+d+=3==s+"));