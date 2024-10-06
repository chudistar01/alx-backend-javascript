const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('adds floating whole number', function () {
	assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('adds floating numbers', function () {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('adds floating numbers', function () {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('adds floating numbers', function () {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

});
    
