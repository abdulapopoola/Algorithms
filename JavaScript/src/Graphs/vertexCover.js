'use strict';

function vertexCover(graph, collapse) {
    var vertices = Object.keys(graph);
    var vertexCount = vertices.length;
    var visited = new Array(vertexCount);

    for (var i = 0; i < vertexCount; i++) {
        if (!visited[i]) {
            var linkedVertices = graph[i];
            var linkedVerticesCount = linkedVertices.length;
            for (var j = 0; j < linkedVerticesCount; j++) {
                var edgeEndpoint = linkedVertices[j];
                if (!visited[edgeEndpoint]) {
                    visited[i] = true;
                    visited[edgeEndpoint] = true;
                    break;
                }
            }
        }
    }

    var coverVertices = visited.reduce(function (prev, curr, index) {
        prev[index] = true;
        return prev;
    }, {});

    if (collapse) {
        var collapsedVertices = [];
        var 

        //find all covered vertices
        //for each edge; check if its vertices are already covered by an endpoint
        //remove the redundant endpoint
    }

    return Object.keys(coverVertices).map(Number);
}

module.exports = vertexCover;
