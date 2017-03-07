
//
var isValid = (function() {

	function helper(str, start, end) { // helper() is a private function
		if (start > end) {
			return true;
		}

		if (str.charAt(start) != str.charAt(end)) {
			return false;

		}
		return helper(str, start + 1, end - 1);
	}

	return {
		isValid: function(str) {
			return helper(str, 0, str.length - 1);
		}
	}
})();


//TEST
var test = ["abc", "aabaa", "hello olleh", ""];
test.forEach(function(e) {
	console.log(isValid.isValid(e));
})
