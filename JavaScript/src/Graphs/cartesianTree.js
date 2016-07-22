function createCartesianTree(entries /*array*/) {
    var listCopy = entries.slice();

    var firstEntry = listCopy.shift();
    var root = new Node(firstEntry, null);
    var lastProcessedNode = root;

    for (var i = 0, len = listCopy.length; i < len; i++) {
        var entry = listCopy[i];
        var newNode = new Node(entry);

        while (lastProcessedNode.val > entry && lastProcessedNode.parent) {
            lastProcessedNode = lastProcessedNode.parent;
        }
        if (lastProcessedNode.val > entry) {
            lastProcessedNode.parent = newNode;
            newNode.leftChild = lastProcessedNode;
            root = newNode;
        } else if (!lastProcessedNode.rightChild) {
            newNode.parent = lastProcessedNode;
            lastProcessedNode.rightChild = newNode;
        } else {
            newNode.leftChild = lastProcessedNode.rightChild;
            lastProcessedNode.rightChild = newNode;
            newNode.parent = lastProcessedNode;
        }

        lastProcessedNode = newNode;
    }

    return root;
}

var a = createCartesianTree([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]);
