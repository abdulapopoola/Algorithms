function Tree(val, parent) {
    this.parent = parent || null;
    this.val = val || null;
    this.leftChild = null;
    this.rightChild = null;
}

function createCartesianTree(entries /*array*/){
    var listCopy = new Array(entries);
    
    var firstEntry = listCopy.shift();
    var tree = new Tree(firstEntry);
    var lastSeenNode = tree;
    
    while(listCopy.length){
        var entry = listCopy.shift();
        if(entry > lastSeenNode.val){
            lastSeenNode.rightChild = new Tree(entry, lastSeenNode);
        } else {
            var parent = lastSeenNode.parent;
            while(parent && parent.val <= entry){
                parent = parent.parent;
            }
            if(parent && parent.parent){
                var newNode = new Tree(entry, parent);
                var parentRightChild = parent.rightChild;
                parent.rightChild = newNode;
                newNode.leftChild = parentRightChild;
            } else {
                var newNode = new Tree(entry, null);
                newNode.leftChild = parent;
            }
        }
    }    
}

createCartesianTree([9,3,7,1,8,12,10,20,15,18,5]);