'use strict';

function incidenceMatrixToAdjList(matrix) {
    //go column wise
    //every 1 you see; add entry into edge list
    //optimize by stopping after second one since edge only has two vertices
    //add opposing edges into edge list
    var edgeCount = matrix[0].length;
    var vertixCount = matrix.length;
    var adjList = {};
    for (var i = 0; i < edgeCount; i++) {
        var edgeVerticesFound = 0;
        var edgeVertices = [];
        for (var j = 0; j < vertixCount; j++) {
            if (matrix[i][j]) {
                edgeVertices.push(j);
                edgeVerticesFound++;
                if (edgeVerticesFound === 2) {
                    break;
                }
            }
        }
        var vertix0 = edgeVertices[0];
        var vertix1 = edgeVertices[1];
        adjList[vertix0] = (adjList[vertix0] || []).push(vertix1);
        adjList[vertix1] = (adjList[vertix1] || []).push(vertix0);
    }
}

module.exports = incidenceMatrixToAdjList;
