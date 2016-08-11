'use strict';

var Node = require('../Common/treeNode');
var isNumber = require('../Common/utils').isNumber;

var symbols = ['*', '/', '+', '-'];

function Evaluator(tree) {
    var treeVal = tree.val;
    if (isNumber(treeVal)) {
        return treeVal;
    }

    //handle scenario for tree and do the right operation


}

module.exports = Evaluator;
