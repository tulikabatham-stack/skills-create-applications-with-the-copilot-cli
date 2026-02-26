#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

class Calculator {
  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divide two numbers
   * @param {number} a - First number (numerator)
   * @param {number} b - Second number (denominator)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If b is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  /**
   * Calculate the remainder of division
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If b is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
  }

  /**
   * Raise a number to a power
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} Base raised to the exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Calculate the square root of a number
   * @param {number} n - The number
   * @returns {number} Square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Square root of negative numbers is not allowed');
    }
    return Math.sqrt(n);
  }
}

module.exports = Calculator;
