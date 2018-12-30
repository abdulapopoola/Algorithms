/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if(!head) {
      return head;      
  }
    
  let runner = head;
  let map = {};
  
  while(runner) {
    let currentNode = runner;
    let copy = new RandomListNode(currentNode.label);
    map[currentNode.label] = copy;
    runner = runner.next;
  }
  
  runner = head;
  while(runner) {
    let clonedCopy = map[runner.label];
    let next = runner.next ? map[runner.next.label] : runner.next;
    let random = runner.random? map[runner.random.label] : runner.random;
    clonedCopy.next = next;
    clonedCopy.random = random;
    runner = runner.next;
  }
  
  return map[head.label];
};
