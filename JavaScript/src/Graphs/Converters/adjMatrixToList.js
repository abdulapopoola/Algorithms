function converter(matrix) {
    var verticesLen = matrix.length;
    var adjacencyList = {};
    for (var i = 0; i < verticesLen; i++) {
        var vertixEdge = matrix[i];
        var edges = [];
        for (var j = 0; j < verticesLen; j++) {
            if (vertixEdge[j]) {
                edges.push(j);
            }
        }
        adjacencyList[i] = edges;
    }

    return adjacencyList;
}

