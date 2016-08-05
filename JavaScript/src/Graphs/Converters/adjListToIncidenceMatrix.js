'use strict';

function adjListToIncidenceMatrix(adjList) {
    var vertices = Object.keys(adjList);
    var verticesCount = vertices.length;
    var edgesMap = {};
    var incidentMatrix = [];
    var edgeCounter = 0;
    for (var i = 0; i < verticesCount; i++) {
        var vertix = vertices[i];
        var edgeList = adjList[vertix];
        var edgeMatrix = Array.apply(null, new Array(verticesCount)).map(Number.prototype.valueOf, 0);
        for (var j = 0, len = edgeList.length; j < len; j++) {
            var edgeKey = getEdgeKey(vertix, edgeList[j]);
            var edgeNumber = edgesMap[edgeKey];
            if (edgeNumber == null) {
                edgeNumber = edgeCounter++;
                edgesMap[edgeKey] = edgeNumber;
            }
            edgeMatrix[edgeNumber] = 1;
        }
        incidentMatrix.push(edgeMatrix);
    }
    return incidentMatrix;
}

function getEdgeKey(vertix1, vertix2) {
    if (vertix1 < vertix2) {
        return '' + vertix1 + vertix2;
    } else {
        return '' + vertix2 + vertix1;
    }
}

module.exports = adjListToIncidenceMatrix;
