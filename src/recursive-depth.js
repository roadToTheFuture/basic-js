const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let level = 1;
		let counter;
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) counter = this.calculateDepth(arr[i]) + 1
			if (counter > level) level = counter;
		}
		return level;
	};

}