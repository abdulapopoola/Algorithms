def reverseList(linkedlist):
    head = linkedlist.getHead()
    pointer = head
    while (pointer.getNextNode()!= None):
        next_node = pointer.getNextNode()
        linkedlist.insert(Node(next_node.getNodeValue()))
        nxt = next_node.getNextNode()
        pointer.setNextNode(nxt)
        #linkedlist.delete(pointer.getNextNode())
       # linkedlist.insert(pointer.getNextNode())
       # pointer.setNextNode(pointer.getNextNode().getNextNode())
       # print 'f'
    return linkedlist

class Node:
    def __init__(self,value):
        self.value = value
        self.nextNode = None
    
    def getNodeValue(self):
        return self.value

    def setNextNode(self,node):
        self.nextNode = node

    def getNextNode(self):
        return self.nextNode

    def __eq__(self,node):
        return (node.getNodeValue() == self.value) and (node.getNextNode() ==
        self.nextNode)

    def __str__(self):
        return "%s" %(self.value)

    def __repr__(self):
        return str(self)
    
class LinkedList:
    def __init__(self,headNode):
        self.head = headNode

    def getHead(self):
        return self.head

    def insert(self,node):
        node.setNextNode(self.head)
        self.head = node
    
    def search(self,node):
        current_node = self.head
        while (current_node!=node and current_node!=None):
            current_node = current_node.getNextNode()
        return current_node

    def delete(self,node):
        current_node = self.head
        while(current_node != None):
            if (current_node.getNextNode() == node):
                current_node.setNextNode(node.getNextNode())
                return
        return current_node

a=Node(1)
b=Node(2)
c=Node(3)
d=Node(4)

l=LinkedList(a)
l.insert(b)
l.insert(c)
l.insert(d)

ll =reverseList(l)
