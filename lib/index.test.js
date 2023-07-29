import { deepFreeze } from './index.js';

test('freeze map', () => {
  const obj = deepFreeze({
    map: new Map([
      [1, 1],
      [2, 2],
    ]),
  });
  expect(() => {
    obj.map.clear();
  }).toThrow('map is read-only');
});

test('freeze set', () => {
  const obj = deepFreeze({
    set: new Set([1, 2]),
  });
  expect(() => {
    obj.set.add(3);
  }).toThrow('set is read-only');
});

test('freeze function', () => {
  const mockFn = function () {};

  const obj = deepFreeze({
    fn: mockFn,
  });

  expect(() => {
    obj.fn.something = '';
  }).toThrow('Cannot add property something, object is not extensible');
});
