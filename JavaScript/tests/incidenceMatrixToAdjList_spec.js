'use strict';

var converter = require('../src/Graphs/Converters/incidenceMatrixToAdjList');

describe('Utils', function () {
    it('should convert incidence matrix to  adjacency list', function () {
        var list = [
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 1],
            [0, 0, 1, 1]
        ];

        expect(converter(list)).toEqual({
            0: [1, 2],
            1: [0, 3],
            2: [0, 3],
            3: [1, 2]
        });
    });
});
