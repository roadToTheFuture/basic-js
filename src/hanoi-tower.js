const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let speedInSecond = turnsSpeed / 3600;
	let turns = (2 ** disksNumber) - 1;
	let seconds = turns / speedInSecond;


	let result = { 'turns': turns, 'seconds': Math.floor(seconds) };

	return result;

};
