/// <reference path="../../typings/main/ambient/node/node.d.ts" />
/// <reference path="../../typings/main/ambient/mocha/mocha.d.ts" />
/// <reference path="../../typings/main/ambient/chai/chai.d.ts" />

import chai = require('chai');
import devxBase = require('../build/DevxBase');
console.log(devxBase);

var expect = chai.expect;

describe('Testing DevxBase app', () => {
	beforeEach(() => {
		// Arrange
		//DevxBase.say..init(['Awesome', 'Ok', 'Bad']);
	});

	it('should be able to get votes', () => {
		// Act
		//var result = devxBase.sayHello();

		// Assert
		//expect(result).eql([{ label: 'Awesome', votes: 0 }, { label: 'Ok', votes: 0 }, { label: 'Bad', votes: 0 }]);
		//expect(result.map(item => item.label)).eql(['Awesome', 'Ok', 'Bad']);
		//expect(result.map(item => item.votes).reduce((a, b) => a + b)).to.be.equal(0);
	});
});
