import operate from './operate';

export default function calculate(data, buttonName) {
  let { total, next, operation } = data;
  const operator = ['+', '-', 'x', '÷', '%'];
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (digits.includes(buttonName) || buttonName === '.') {
    if (operation === '=') {
      total = null;
      next = null;
      operation = null;
    }

    if (total === null && next === null && operation === null) {
      total = buttonName;
    } else if (next === null && operation === null) {
      if (buttonName === '.') {
        total = total.includes(buttonName) ? `${total}` : total + buttonName;
      } else {
        total += buttonName;
      }
    } else if (next === null) {
      next = buttonName;
    } else if (buttonName === '.') {
      next = next.includes(buttonName) ? `${next}` : next + buttonName;
    } else {
      next += buttonName;
    }
  } else if (operator.includes(buttonName)) {
    if (total !== null) {
      operation = buttonName;
      if (buttonName === '%') total /= 100;
    }
  } else if (buttonName === '+/-') {
    if (next !== null) next *= -1;
    else if (total !== null) total *= -1;
  } else if (buttonName === '=') {
    if (total !== null && next !== null && operation !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = '=';
    }
  }

  return { total, next, operation };
}
