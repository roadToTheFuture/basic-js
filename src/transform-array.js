const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!arr) throw new Error('Error');
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '' || arr[i] === undefined) continue;
		if (arr[i] === '--double-next') {
			if (arr[i + 1] === '' || arr[i + 1] === undefined) continue;
			result.push(arr[i + 1]);
			continue;
		}

		if (arr[i] === '--discard-prev') {
			if (arr[i - 1] === "" || arr[i - 1] === undefined) continue;
			if (arr[i - 2] != '--discard-next') result.pop();
			continue;
		}

		if (arr[i] === '--double-prev') {
			if (arr[i - 1] === '' || arr[i - 1] === undefined) continue;
			if (arr[i - 2] != '--discard-next') result.push(arr[i - 1]);
			continue;
		}

		if (arr[i] === '--discard-next') {
			if (arr[i + 1] === "" || arr[i + 1] === undefined) continue;
			i += 1;
			continue;
		}

		result.push(arr[i]);
	}
	return result

}
