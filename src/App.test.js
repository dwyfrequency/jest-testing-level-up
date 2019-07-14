import { add, total } from './App';

//  Unit tests - when we are just testing a specific func or component
test('should sum values', () => {
  expect(add(1, 2)).toBe(3);
});

test('should add correctly', () => {
  expect(add(1, 7)).not.toBe(4);
});

// integration tests - when we are testing how it integrates with other code
test('should ', () => {
  expect(total(1, 7)).toBe('$8');
});
