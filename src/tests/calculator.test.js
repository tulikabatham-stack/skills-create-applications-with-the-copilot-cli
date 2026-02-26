const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add two negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative numbers correctly', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    it('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    it('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    it('should add decimal numbers correctly', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2, 1);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it('should subtract two negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    it('should subtract a larger number from a smaller number', () => {
      expect(calculator.subtract(3, 10)).toBe(-7);
    });

    it('should subtract zero from a number', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    it('should subtract a number from zero', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    it('should subtract two zeros', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    it('should subtract decimal numbers correctly', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3, 1);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    it('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it('should multiply two negative numbers correctly', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    it('should multiply positive and negative numbers correctly', () => {
      expect(calculator.multiply(4, -6)).toBe(-24);
    });

    it('should multiply by one', () => {
      expect(calculator.multiply(7, 1)).toBe(7);
    });

    it('should multiply decimal numbers correctly', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    it('should multiply fractional numbers correctly', () => {
      expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25, 2);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers correctly', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    it('should divide two negative numbers correctly', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    it('should divide positive and negative numbers correctly', () => {
      expect(calculator.divide(20, -5)).toBe(-4);
    });

    it('should divide by one', () => {
      expect(calculator.divide(7, 1)).toBe(7);
    });

    it('should divide a number by itself', () => {
      expect(calculator.divide(5, 5)).toBe(1);
    });

    it('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    it('should return correct decimal result', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    it('should throw an error when dividing negative number by zero', () => {
      expect(() => {
        calculator.divide(-10, 0);
      }).toThrow('Division by zero is not allowed');
    });

    it('should throw an error when dividing zero by zero', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Division by zero is not allowed');
    });
  });

  describe('Example Operations from Image', () => {
    it('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    it('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });
});
