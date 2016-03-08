function Node(val, parent) {
    this.parent = parent || null;
    this.val = val || null;
    this.leftChild = null;
    this.rightChild = null;
}