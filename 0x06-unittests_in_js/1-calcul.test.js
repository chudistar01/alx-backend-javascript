const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
	it('adds floating whole number', () => {
	    assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it('adds floating numbers', () => {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('adds floating numbers', () => {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});

	it('adds floating numbers', () => {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	describe('type == "SUBTRACT"', () => {
	    it('two positve numbers', () => {
		assert.strictEqual(calculateNumber(3.0, 3.0), 0)
	    });

	    it('equal negative', () => {
                assert.strictEqual(calculateNumber(-3.0, -3.0), 0)
            });

	    it('negative and positive', () => {
                assert.strictEqual(calculateNumber(-3.0, 1.0), -4)
            });

	    it('positive and negative', () => {
                assert.strictEqual(calculateNumber(-3.0, 1.0), -4)
            });
	});

	describe('type == "DIVIDE"', () => {
	    it('two positve numbers', () => {
		assert.strictEqual(calculateNumber(3.0, 3.0), 1)
            });
	    
	    it('equal negative', () => {
                assert.strictEqual(calculateNumber(-3.0, -3.0), 1)
            });

	    it('negative and positive', () => {
                assert.strictEqual(calculateNumber(-3.0, 1.0), -3)
            });

	    it('positive and negative', () => {
                assert.strictEqual(calculateNumber(-3.0, 1.0), -4)
            });
	});
    });
	      
});
