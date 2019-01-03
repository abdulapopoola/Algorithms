var inorderTraversal = function(root) {
    let values = [];
    traverse(root, values);    
    return values;
};

function traverse(node, array) {
    if(node) {
        if(node.left) {
            traverse(node.left, array);
        }
        array.push(node.val);
        if(node.right) {
            traverse(node.right, array);
        }
    }    
}
