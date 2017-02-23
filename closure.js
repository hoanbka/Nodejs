var counter = (function(){

	var privateCounter = 0;
	 function changeBy(val){
	 	privateCounter +=val;
	 }

	 return {
	 	increment: function(){
	 		changeBy(1);
	 	},
	 	decrement: function(){
	 		changeBy(-1);
	 	},
	 	value: function(){
	 		return privateCounter;
	 	}
	 }
})();


counter.increment();
counter.increment();

console.log(counter.value());

counter.decrement();
console.log(counter.value());


//////////

a = (function () {
    var privatefunction = function () {
        // alert('hello');
        console.log('hello PhD Hoan Nguyen');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
})();

//Why do we need to use closure in Javascript ? because we want to hide the implementation of some fuctions like privatefunction that
// can not be invoked outside


//http://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript
// now a is an object
a.publicfunction(); // you can only invoke public function
a.privatefunction(); // you can not call private function here
