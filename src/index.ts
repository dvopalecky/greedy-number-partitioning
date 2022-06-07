import { SubsetElement } from './types';

/**
 * Implementation of https://en.wikipedia.org/wiki/Greedy_number_partitioning
 * Sorts the numbers in descending order
 * Then iteratively add the next-largest number to a set in which the current sum is smallest.
 * @param {Object[] | number[]} array
 * @param {number} numberOfSubsets
 * @param {(x: Object | number) => number} valueOf
 * @returns - Array of arrays of (numbers | Objects)
 */

export default function greedyPartitioning<T>(
  array: T[],
  numberOfSubsets: number,
  valueOf: (x: T) => number = (x) => (x as any as number)
): T[][] {
  const sorted = array.sort((a: T, b: T) => valueOf(b) - valueOf(a)); // sort descending

  const out = [...Array(numberOfSubsets)].map(x => {
    const elem: SubsetElement<T> = {
      sum: 0,
      elements: [],
    };

    return elem;
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += valueOf(elem);
  }

  return out.map(subset => subset.elements);
}