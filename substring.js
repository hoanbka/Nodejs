var str1= "ahelloworld123jjhelloworld2";
var str2="helloworld1sdfggkkhelloworld2k";

var subStringArr1 =[];
var commonSub = [];


for(var i =0;i< str1.length;i++){

	for( var j= i+1;j<= str1.length;j++){
		subStringArr1.push(str1.substring(i,j));
	}
}

subStringArr1.sort(function(a,b){
	return b.length-a.length;
});


for(var i= 0;i< subStringArr1.length;i++){

	if(str2.includes(subStringArr1[i])){

		commonSub.push(subStringArr1[i]);
	
		if(subStringArr1[i].length< commonSub[0].length){
			commonSub.pop();
			break;
		}
		
	}
}

console.log("lengthest substring of two given string are :")
commonSub.forEach(function(element){
	console.log(element);
})