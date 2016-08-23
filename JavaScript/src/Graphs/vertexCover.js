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
                if (!visited[j]) {
                    visited[i] = true;
                    visited[j] = true;
                    break;
                }
            }
        }
    }

    var cover = [];
    for (var i = 0; i < visited.length; i++) {
        if (visited[i]) {
            cover.push(i);
        }
    }

    return cover;
}

module.exports = vertexCover;
