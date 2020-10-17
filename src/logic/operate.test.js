import operate from './operate';

test('Return num1 plus num2', () => {
  const total = operate(5, 5, '+');
  expect(total).toBe('10');
});

test('Return num1 minus num2', () => {
  const total = operate(5, 5, '-');
  expect(total).toBe('0');
});

test('Return num1 times num2', () => {
  const total = operate(5, 5, 'x');
  expect(total).toBe('25');
});

test('Return num1 div num2', () => {
  const total = operate(5, 5, '÷');
  expect(total).toBe('1');
});

test('Return Error in Division by Zero', () => {
  const total = operate(5, 0, '÷');
  expect(total).toBe('Error');
});

test('Return 5% of 100', () => {
  const total = operate(0.05, 100, '%');
  expect(total).toBe('5');
});
