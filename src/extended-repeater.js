const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let arrLevel1 = [];
	let arrLevel2 = [];
	let separatorFirstLevel = options.separator;
	let separatorSecondLevel = options.additionSeparator;
	let repeatLevel1 = options.repeatTimes;
	let repeatLevel2 = options.additionRepeatTimes;

	if (typeof str != 'string' && typeof str === 'null') str = str.toString();

	if (typeof options.addition === 'undefined') options.addition = 'erorr';
	if (options.addition && typeof options.addition != 'string' || typeof options.addition === 'null') options.addition = options.addition.toString();


	if (!separatorFirstLevel) separatorFirstLevel = '+';
	if (!separatorSecondLevel) separatorSecondLevel = '|';

	if (!repeatLevel1) repeatLevel1 = 1;
	if (!repeatLevel2) repeatLevel2 = 1;

	//arrLevel1
	for (let i = 1; i <= repeatLevel1; i++) {
		arrLevel1.push(`${str}`)
	}

	//arrLevel2
	for (let i = 1; i <= repeatLevel2; i++) {
		arrLevel2.push(`${options.addition}`)
		arrLevel2.push(`${separatorSecondLevel}`)
	}

	arrLevel2.pop()

	//join
	let result = arrLevel1.map(function (elem) {
		if (arrLevel2[0] != 'erorr') return elem += arrLevel2.join('');
		else return elem
	});



	// result out


	return result.join('----').replace(/----/g, `${separatorFirstLevel}`);
	//throw new CustomError('Not implemented');
	// remove line with error and write your code here
};
