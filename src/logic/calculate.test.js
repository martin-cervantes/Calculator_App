import calculate from './calculate';

const data0 = { total: null, next: null, operation: null };
let buttonDigit = '1';
test('Press digit button after initialization', () => {
  const response = calculate(data0, buttonDigit);
  expect(response).toMatchObject({ total: '1', next: null, operation: null });
});

buttonDigit = '1';
test('Press digit button after 1', () => {
  const response = calculate({ total: '1', next: null, operation: null }, buttonDigit);
  expect(response).toMatchObject({ total: '11', next: null, operation: null });
});

buttonDigit = '1';
test('Press digit button after 11', () => {
  const response = calculate({ total: '11', next: null, operation: null }, buttonDigit);
  expect(response).toMatchObject({ total: '111', next: null, operation: null });
});

const buttonOperator = 'x';
test('Press operator button after number', () => {
  const response = calculate({ total: '111', next: null, operation: null }, buttonOperator);
  expect(response).toMatchObject({ total: '111', next: null, operation: 'x' });
});

buttonDigit = '1';
test('Press digit button after operator', () => {
  const response = calculate({ total: '111', next: null, operation: 'x' }, buttonDigit);
  expect(response).toMatchObject({ total: '111', next: '1', operation: 'x' });
});

const buttonResult = '=';
test('Press digit button after operator', () => {
  const response = calculate({ total: '111', next: '1', operation: 'x' }, buttonResult);
  expect(response).toMatchObject({ total: '111', next: null, operation: '=' });
});

const data1 = { total: null, next: null, operation: 'x' };
const data2 = { total: null, next: '5', operation: 'x' };
const data3 = { total: '25', next: '5', operation: 'x' };
const buttonAC = 'AC';
test('Press AC button after initialization', () => {
  const response = calculate(data0, buttonAC);
  expect(response).toMatchObject(data0);
});

test('Press AC button after operator', () => {
  const response = calculate(data1, buttonAC);
  expect(response).toMatchObject(data0);
});

test('Press AC button after capture and operator', () => {
  const response = calculate(data2, buttonAC);
  expect(response).toMatchObject(data0);
});

test('Press AC button after operation', () => {
  const response = calculate(data3, buttonAC);
  expect(response).toMatchObject(data0);
});
