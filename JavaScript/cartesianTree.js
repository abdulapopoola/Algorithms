function Node(val, parent) {
    this.parent = parent || null;
    this.val = val || null;
    this.leftChild = null;
    this.rightChild = null;
}

function createCartesianTree(entries /*array*/ ) {
    var listCopy = entries.slice();

    var firstEntry = listCopy.shift();
    var root = new Node(firstEntry, null);
    var lastSeenNode = root;

    for (var i = 0, len = listCopy.length; i < len; i++) {
        var entry = listCopy[i];
        var newNode = new Node(entry);

        while (lastSeenNode.val > entry && lastSeenNode.parent != null) {
            lastSeenNode = lastSeenNode.parent;
        }
        if (lastSeenNode.val > entry) {
            lastSeenNode.parent = newNode;
            newNode.leftChild = lastSeenNode;
        } else if (lastSeenNode.rightChild == null){
            newNode.parent = lastSeenNode;
            lastSeenNode.rightChild = newNode;
        } else {
            var tmp = lastSeenNode.rightChild;
            lastSeenNode.rightChild = newNode;
            lastSeenNode.leftChild = tmp;
            newNode.parent = lastSeenNode;
        }

        lastSeenNode = newNode;
    }
    
    return root;
}

createCartesianTree([9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5]);