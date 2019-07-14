import { add, total } from './App';

//  Unit tests
test('should sum values', () => {
  expect(add(1, 2)).toBe(3);
});

test('should add correctly', () => {
  expect(add(1, 7)).not.toBe(4);
});

// integration tests
test('should ', () => {
  expect(total(1, 7)).toBe('$8');
});
