const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
	if (Object.values(date)[0]) throw new Error('Error');

	let season = [['winter', 12, 1, 2], ['spring', 3, 4, 5], ['summer', 6, 7, 8], ['autumn', 9, 10, 11]];
	let month = date.getMonth() + 1;
	let result;

	season.forEach(element => {
		for (let i = 1; i < element.length; i++) {
			if (element[i] === month) {
				result = element[0];
				break;
			}
		}
	});

	return result;

};
