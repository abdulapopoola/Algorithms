'use strict';

var TreeNode = function(val, parent) {
    this.parent = parent || null;
    this.val = val || null;
    this.left = null;
    this.right = null;
};

module.exports = TreeNode;
