'use strict';

function incidenceMatrixToAdjList(matrix) {
    //go column wise
    //every 1 you see; add entry into edge list
    //optimize by stopping after second one since edge only has two vertices
    //add opposing edges into edge list
    var vertixCount = matrix.length;
    var edgeCount = matrix[0].length;
    var adjList = {};

    for (var i = 0; i < edgeCount; i++) {
        var foundEdges = [];
        for (var j = 0; j < vertixCount; j++) {
            var hasEdge = matrix[j][i];
            if (hasEdge) {
                foundEdges.push(j);
            }
            if (foundEdges.length === 2) {
                break;
            }
        }

        var vertix0 = foundEdges[0];
        var vertix1 = foundEdges[1];

        adjList[vertix0] = adjList[vertix0] || [];
        adjList[vertix1] = adjList[vertix1] || [];

        adjList[vertix0].push(vertix1);
        adjList[vertix1].push(vertix0);
    }

    return adjList;
}

module.exports = incidenceMatrixToAdjList;
