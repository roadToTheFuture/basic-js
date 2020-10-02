const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	function checkArr(arr) {
		if (typeof arr[0] === 'string') {
			return true;
		} else {
			return false;
		}

	};

	module.exports = function createDreamTeam(members) {
		if (checkArr(members)) {
			let x = members;
			let result = "";


			for (let i = 0; i < x.length; i++) {
				if (typeof x[i] === 'string') {
					result += (/[A-Za-z]/).exec(x[i].split('')).toString().trim().toUpperCase();
				}
			}
			return result.split('').sort().join('');

		} else {
			return false;
		}
	};
};
