let isSameTree = (p, q) => {
    if(p && q) {
        return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    }
    
    return p === q;
};
