function getTime(){

	var time = new Date();

	this.getTime = function(){

		return time;
	}
}

var t = new getTime();

console.log("time = "+ t.time);

console.log("time = "+ t.getTime());