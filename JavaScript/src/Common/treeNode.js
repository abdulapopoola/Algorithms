'use strict';

var TreeNode = function(val, parent) {
    this.parent = parent || null;
    this.val = val || null;
    this.leftChild = null;
    this.rightChild = null;
};

module.exports = TreeNode;
