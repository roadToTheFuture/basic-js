const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(members) {
	let result = "";

	if (members) {
		if (members[0]) {
			members;
		} else {
			return false;
		}
	} else {
		return false;
	}

	for (let i = members.length - 1; i >= 0; i--) {
		if (typeof members[i] != 'string') {
			members.splice(i, 1);
		}
	}

	for (let i = 0; i < members.length; i++) {
		result += members[i].trim().split('')[0];
	}

	return result.toUpperCase().split('').sort().join('');
};


