import { add, total } from './App';

//  Unit tests - when we are just testing a specific func or component
test('should sum values', () => {
  expect(add(1, 2)).toBe(3);
});

test('should add correctly', () => {
  expect(add(1, 7)).not.toBe(4);
});

// integration tests - when we are testing how it integrates with other code
test('should return summed value with dollar sign', () => {
  expect(total(1, 7)).toBe('$8');
});

// Mock Functions - a fake func that gives you a defined result
// we can even load functions and turn them into mocks ie. testing with db or api call without
// actually hitting the api
const plus = jest.fn();
test('should be called twice and without params', () => {
  plus(1);
  // if values are coming in from other areas we can validate with this
  expect(plus).toHaveBeenCalledWith(1);
  plus();
  // can register how many times a func has been called
  expect(plus).toHaveBeenCalledTimes(2);
});
