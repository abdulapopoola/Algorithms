'use strict';

function adjListToIncidenceMatrix(matrix) {
    var vertices = Object.keys(matrix);
    var matrixLen = vertices.length;
    var edgesMap = {};
    var incidentMatrix = [];
    var edgeCounter = 0;
    for (var i = 0; i < matrixLen; i++) {
        var vertix = vertices[i];
        var edgeList = matrix[vertix];
        var edgeMatrix = Array.apply(null, new Array(matrixLen)).map(Number.prototype.valueOf, 0);
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
