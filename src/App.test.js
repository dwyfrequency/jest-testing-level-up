import { add } from './App';

test('should sum values', () => {
  expect(add(1, 2)).toBe(3);
});

test('should add correctly', () => {
  expect(add(1, 7)).not.toBe(4);
});
