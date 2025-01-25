const ratio = require('../ratio/index');
const factorial = require('../factorial/index');

const ratioAndFactorial = (num1, num2, num3) => {
  const ratioOfFirstTwoNumber = ratio(num1, num2);
  const factorialOfLastNumber = factorial(num3);

  return {ratio: ratioOfFirstTwoNumber, factorial: factorialOfLastNumber};
}

console.log(ratioAndFactorial(2,3,5));

module.exports = ratioAndFactorial;
