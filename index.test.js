const greedyPartitioning = require('./index.js');

test('empty array', () => {
  expect(greedyPartitioning([], 1)).toStrictEqual([[]]);
});

test('one number', () => {
  expect(greedyPartitioning([1], 1)).toStrictEqual([[1]]);
});

test('same numbers', () => {
  expect(greedyPartitioning([2, 2, 2], 3)).toStrictEqual([[2], [2], [2]]);
});

test('more numbers than subset', () => {
  expect(greedyPartitioning([2, 3], 3)).toStrictEqual([[2], [], [3]]);
});


test('few numbers', () => {
  const arr = [6, 7, 16, 10, 15, 3, 11, 4, 12, 20, 5, 13, 19];
  const expected = [[19, 13, 7, 6, 3], [16, 15, 11, 4], [20, 12, 10, 5]];
  expect(greedyPartitioning(arr, 3)).toStrictEqual(expected);
});
