function pushRight(tree, rightChild) {
    if (tree.rightChild) {
        pushRight(tree.rightChild);
    }
    tree.rightChild = rightChild;
}

function flatten(tree) {
    var left = null;
    var right = null;

    if (tree.leftChild) {
        left = flatten(tree.leftChild);
        tree.leftChild = null;
    }

    if (tree.rightChild) {
        right = flatten(tree.rightChild);
        tree.rightChild = null;
    }

    if (left) {
        pushRight(left, tree);
    } else {
        left = tree;
    }

    if (right) {
        pushRight(left, right);
    }

    return left;
}
