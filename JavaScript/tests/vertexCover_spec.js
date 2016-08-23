'use strict';

var vertexCover = require('../src/Graphs/vertexCover');

describe('vertexCover', function () {
    it('should find the vertexCover', function () {
        var graph = {
            0: [1, 2, 3, 4],
            1: [0],
            2: [0],
            3: [0],
            4: [0]
        };

        expect(vertexCover(graph)).toEqual([0, 1]);
    });
});
