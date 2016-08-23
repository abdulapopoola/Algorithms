'use strict';

function vertexCover(graph) {
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

    return visited.map(function (val, i) {
        return i;
    }).filter(function (val) {
        return val != null;
    });
}

module.exports = vertexCover;
