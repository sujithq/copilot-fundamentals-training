/**
 * @description Test cases for calculator.js
 * This file provides unit tests for all the operations 
 * in my calculator.js file.
 */

// import the calculator function
const calculator = require('../calculator');

// test cases for the calculator function
describe('calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator(1, 2, '+')).toBe(3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(calculator(5, 3, '-')).toBe(2);
    });

    test('multiplies 4 * 3 to equal 12', () => {
        expect(calculator(4, 3, '*')).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(calculator(10, 2, '/')).toBe(5);
    });

    test('modulo 10 % 3 to equal 1', () => {
        expect(calculator(10, 3, '%')).toBe(1);
    });

    test('exponent 2 ^ 3 to equal 8', () => {
        expect(calculator(2, 3, '^')).toBe(8);
    });

    test('throws error on division by zero', () => {
        expect(() => calculator(10, 0, '/')).toThrow('Division by zero');
    });

    test('throws error on invalid operator', () => {
        expect(() => calculator(1, 2, '&')).toThrow('Invalid operator');
    });
});
