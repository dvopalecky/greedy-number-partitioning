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


export default function greedyPartitioning(
  array: number[],
  numberOfSubsets: number,
) {
  const sorted = array.sort((a: number, b: number) => b - a); // sort descending

  const out = [...Array(numberOfSubsets)].map(x => {
    const elem: SubsetElement<number> = {
      sum: 0,
      elements: [],
    };

    return elem;
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += elem;
  }

  return out.map(subset => subset.elements);
}

export function greedyPartitioningObjects(
  array: any[],
  numberOfSubsets: number,
  valueOf: (x: any) => number,
) {
  const sorted = array.sort((a, b) => valueOf(b) - valueOf(a)); // sort descending

  const out = [...Array(numberOfSubsets)].map(x => {
    const elem: SubsetElement<any> = {
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