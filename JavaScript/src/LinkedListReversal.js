function reverseLinkedListIterative(head) {
    let reversed = null;
    while(head) {
        let temp = head;
        head = head.next;

        temp.next = reversed;
        reversed = temp;
    }

    return reversed;    
}

function reverseLinkedListRecursive(head) {
    if(!head || !head.next) {
        return head;
    }

    var reversed = reverseLinkedListRecursive(head.next);
    var nodeNextTocurrentStackNode = head.next;
    nodeNextTocurrentStackNode.next = head;
    head.next = null;
    return reversed;
}


function reverseLinkedListUsingStack(list) {
    if(!list || !list.next) {
        return list;
    }

    let stack = [];
    while(list) {
        let next = list.next;
        list.next = null;
        stack.push(list);
        list = next;
    }

    let head = stack.pop();
    let runner = head;
    while(stack.length){
        let next = stack.pop();
        runner.next = next;
        runner = next;
    }

    return head;
}

function createLinkedList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            next: list
        };
    }
    return list;
}

var ll = createLinkedList([1,2,3,4]);
reverseLinkedListRecursive(ll);
