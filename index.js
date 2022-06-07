/**
 * Implementation of https://en.wikipedia.org/wiki/Greedy_number_partitioning
 * Sorts the numbers in descending order
 * Then iteratively add the next-largest number to a set in which the current sum is smallest.
 * @param {number[]} array
 * @param {number} numberOfSubsets
 * @returns - Array of arrays of numbers
 */
function greedyPartitioning(array, numberOfSubsets, arrayItemValue = (a) => a) {
  const sorted = array.sort((a, b) => arrayItemValue(b) - arrayItemValue(a)); // sort descending

  const out = [...Array(numberOfSubsets)].map(x => {
    return {
      sum: 0,
      elements: [],
    };
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += arrayItemValue(elem);
  }

  return out.map(subset => subset.elements);
}

module.exports = greedyPartitioning
