"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('empty array', () => {
    expect((0, index_1.greedyPartitioning)([], 1)).toStrictEqual([[]]);
});
describe('array of numbers', () => {
    test('one number', () => {
        expect((0, index_1.greedyPartitioning)([1], 1)).toStrictEqual([[1]]);
    });
    test('same numbers', () => {
        expect((0, index_1.greedyPartitioning)([2, 2, 2], 3)).toStrictEqual([[2], [2], [2]]);
    });
    test('more numbers than subset', () => {
        expect((0, index_1.greedyPartitioning)([2, 3], 3)).toStrictEqual([[2], [], [3]]);
    });
    test('few numbers', () => {
        const arr = [6, 7, 16, 10, 15, 3, 11, 4, 12, 20, 5, 13, 19];
        const expected = [[19, 13, 7, 6, 3], [16, 15, 11, 4], [20, 12, 10, 5]];
        expect((0, index_1.greedyPartitioning)(arr, 3)).toStrictEqual(expected);
    });
});
describe('array of objects', () => {
    test('one number', () => {
        expect((0, index_1.greedyPartitioningObjects)([{ value: 1 }], 1, (x) => x.value)).toStrictEqual([[{ value: 1 }]]);
    });
    test('same numbers', () => {
        expect((0, index_1.greedyPartitioningObjects)([{ value: 2 }, { value: 2 }, { value: 2 }], 3, (x) => x.value)).toStrictEqual([[{ value: 2 }], [{ value: 2 }], [{ value: 2 }]]);
    });
    test('more numbers than subset', () => {
        expect((0, index_1.greedyPartitioningObjects)([{ value: 2 }, { value: 3 }], 3, (x) => x.value)).toStrictEqual([[{ value: 2 }], [], [{ value: 3 }]]);
    });
    test('few numbers', () => {
        const arr = [{ value: 6 }, { value: 7 }, { value: 16 }, { value: 10 }, { value: 15 }, { value: 3 }, { value: 11 }, { value: 4 }, { value: 12 }, { value: 20 }, { value: 5 }, { value: 13 }, { value: 19 }];
        const expected = [[{ value: 19 }, { value: 13 }, { value: 7 }, { value: 6 }, { value: 3 }], [{ value: 16 }, { value: 15 }, { value: 11 }, { value: 4 }], [{ value: 20 }, { value: 12 }, { value: 10 }, { value: 5 }]];
        expect((0, index_1.greedyPartitioningObjects)(arr, 3, (x) => x.value)).toStrictEqual(expected);
    });
});
