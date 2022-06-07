"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greedyPartitioningObjects = exports.greedyPartitioning = void 0;
/**
 * Implementation of https://en.wikipedia.org/wiki/Greedy_number_partitioning
 * Sorts the numbers in descending order
 * Then iteratively add the next-largest number to a set in which the current sum is smallest.
 * @param {Object[] | number[]} array
 * @param {number} numberOfSubsets
 * @param {(x: Object | number) => number} valueOf
 * @returns - Array of arrays of (numbers | Objects)
 */
function greedyPartitioning(array, numberOfSubsets) {
    const sorted = array.sort((a, b) => b - a); // sort descending
    const out = [...Array(numberOfSubsets)].map(x => {
        const elem = {
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
exports.greedyPartitioning = greedyPartitioning;
function greedyPartitioningObjects(array, numberOfSubsets, valueOf) {
    const sorted = array.sort((a, b) => valueOf(b) - valueOf(a)); // sort descending
    const out = [...Array(numberOfSubsets)].map(x => {
        const elem = {
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
exports.greedyPartitioningObjects = greedyPartitioningObjects;
