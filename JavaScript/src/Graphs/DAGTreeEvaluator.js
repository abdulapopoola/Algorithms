'use strict';

var treeNode = require('../Common/treeNode');
var isNumber = require('../Common/utils').isNumber;

var symbols = ['*', '/', '+', '-'];

function evaluate(tree) {
    var treeVal = tree.val;
    if (isNumber(treeVal)) {
        return treeVal;
    }

    var left = evaluate(tree.left);
    var right = evaluate(tree.right);

    tree.left.val = left;
    tree.right.val = right;

    var result;
    switch (treeVal) {
        case '*':
            return left * right;
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '/':
            return left / right;
    }
}

module.exports = evaluate;
