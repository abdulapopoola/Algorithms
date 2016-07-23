'use strict';

var adjMatrixToList = require('../src/Graphs/Converters/adjMatrixToList');

describe('Utils', function () {
    it('should convert adjacency matrix to adjacency list', function () {
        var matrix = [
            [0, 1, 1, 0],
            [1, 0, 0, 1],
            [1, 0, 0, 0],
            [0, 1, 1, 0]
        ];
        expect(adjMatrixToList(matrix)).toEqual({
            0: [1, 2],
            1: [0, 3],
            2: [0],
            3: [1, 2]
        });
    });
});
