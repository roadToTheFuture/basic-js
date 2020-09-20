const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	let catsInHome = backyard.flat();
	let result = 0;
	for (let i = 0; i < catsInHome.length; i++) {
		if (catsInHome[i] === "^^") {
			result++;
		}
	}
	return result;
};
