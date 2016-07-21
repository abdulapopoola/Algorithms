function compareTrees(nodeA, nodeB) {
    if (a == null && b == null) {
        //both are empty
        return true;
    } else if (a != null && b != null) {
        return a.val === b.val 
            && compareTrees(a.leftChild, b.leftChild) 
            && compareTrees(a.rightChild, b.rightChild);
    } else {
        //either a or b is null but not both
        return false;
    }
}