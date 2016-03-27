'use strict';

var node = require('./treeNode.js');
var inherits = require('../Utils/utils.js');

var binarySearchTree = function() {};
inherits(binarySearchTree, node);

binarySearchTree.prototype = {
    insert: function(val) {
        
    },
    remove: '',
    contains: ''
};

module.exports = binarySearchTree;