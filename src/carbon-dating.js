const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity === 'string' && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
		let x = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * 1000000) / 1000000;
		let y = Math.ceil(x / k);
		return y;
	} else {
		return false;
	}
};
