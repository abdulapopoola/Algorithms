'use strict';

var TreeNode = require('../src/Common/treeNode');
var evaluate = require('../src/Graphs/arithmeticTreeEvaluator');

describe('Graphs', function () {
    it('should eval arithmetic expression tree', function () {
        var tree = new TreeNode('*');
        tree.left = new TreeNode(1);
        tree.right = new TreeNode(2);
        var result = evaluate(tree);
        expect(result).toEqual(2);
    });

    it('should eval arithmetic expression tree', function () {
        var tree = new TreeNode('+');
        tree.left = new TreeNode(1);
        tree.right = new TreeNode(2);
        var result = evaluate(tree);
        expect(result).toEqual(3);
    });

    it('should eval arithmetic expression tree', function () {
        // 2 + 3 * 4 + (3 * 4) / 5

        var leaf2 = new TreeNode(2);
        var leaf3 = new TreeNode(3);
        var leaf4 = new TreeNode(4);
        var leaf5 = new TreeNode(5);

        var child1 = new TreeNode('*');
        child1.left = leaf3;
        child1.right = leaf4;

        var child2 = new TreeNode('/');
        child2.left = child1;
        child2.right = leaf5;

        var child3 = new TreeNode('+');
        child3.left = leaf2;
        child3.right = child1;

        var root = new TreeNode('+');
        root.left = child2;
        root.right = child3;

        var result = evaluate(root);
        expect(result).toBe(16.4);
    });
});
