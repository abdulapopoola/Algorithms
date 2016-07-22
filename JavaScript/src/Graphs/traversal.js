function inOrder(node) {
    if (node) {
        inOrder(node.leftChild);
        console.log(node.val);
        inOrder(node.rightChild);
    }
}
