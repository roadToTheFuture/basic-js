const CustomError = require("../extensions/custom-error");

const chainMaker = {
	getLength() {
		return this.out.length;
	},
	addLink(value) {
		if (typeof value === 'undefined') {
			this.result.push('( )');
		} else {
			this.result.push(`( ${value} )`);
		}
		return this
	},
	removeLink(position) {
		if (typeof position != 'number' || !Number.isInteger(position) || position > this.result.length - 1 || position < 0) {
			this.result = [];
			return error;

		}
		this.result.splice(position - 1, 1);
		return this
	},
	reverseChain() {
		this.result.reverse()
		return this

	},
	finishChain() {
		this.out = this.result;
		this.result = [];
		return this.out.join().replace(/,/g, '~~');
	},
	result: [],
	out: []
};

module.exports = chainMaker;