# greedy-number-partitioning

This library implements the [Greedy Number Partitioning](https://en.wikipedia.org/wiki/Greedy_number_partitioning) algorithm.

This algorithm solves the problem of Multiway Number Partitioning, i.e. partitioning a multiset of numbers into a fixed number of subsets, such that the sums of the subsets are as similar as possible.

The algorithm doesn't guarantee to obtain optimal solution, but guaranteed approximation of the optimal solution in polynomial time.

## Installation
Install using npm:
```
$ npm install greedy-number-partitioning
```

## Usage
```javascript
const greedyPartitioning = require('greedy-number-partitioning');

const arr = [6, 7, 16, 10, 15, 3, 11, 4, 12, 20, 5, 13, 19];

const numberOfSubsets = 3;

const output = greedyPartitioning(arr, numberOfSubsets);
// returns [
//  [19, 13, 7, 6, 3],    sum 48
//  [16, 15, 11, 4],      sum 46
//  [20, 12, 10, 5]       sum 47
// ]
```

## Licence
MIT
