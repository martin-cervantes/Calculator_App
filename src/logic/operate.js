import Big from 'big.js';

export default function operate(n1, n2, op) {
  const num1 = new Big(n1);
  const num2 = new Big(n2);

  switch (op) {
    case '+': return num1.plus(num2).toString();

    case '-': return num1.minus(num2).toString();

    case 'x': return num1.times(num2).toString();

    case '÷': return n2 === 0 ? 'Error' : num1.div(num2).toString();

    case '%': return num1.times(num2).toString();

    default: return 'Error';
  }
}
