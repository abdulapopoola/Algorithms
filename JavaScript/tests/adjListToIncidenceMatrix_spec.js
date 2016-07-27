'use strict';

var converter = require('../src/Graphs/Converters/adjListToIncidenceMatrix');

describe('Utils', function () {
    it('should convert adjacency list to incidence matrix', function () {
        var list = {
            0: [1, 2],
            1: [0, 3],
            2: [0, 3],
            3: [1, 2]
        }
            ;
        expect(converter(list)).toEqual([
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 1],
            [0, 0, 1, 1]
        ]);
    });
});
