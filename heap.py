class Heap:
    def __init__(self,array):
        self.array = array
        self.heapSize = len(array)

    def parent(self,index):
        return (index/2)

    def getParent(self,index):
        index = self.parent(index)
        if index < self.heapSize and index > 0:
           return self.array[index]
        return None

    def left(self,index):
        return (2*index + 1)

    def leftChild(self,index):
        index = self.left(index)
        if index < self.heapSize and index > 0:
            return self.array[index]
        return None
    
    def right(self,index):
       return (2*index + 2)

    def rightChild(self,index):
        index = self.right(index)
        if index < self.heapSize and index > 0:
            return self.array[index]
        return None
    
    def maxHeapify(self,index):
        left = self.left(index)
        right = self.right(index)
        
        if left < self.heapSize and self.array[left] > self.array[index]:
            largest = left
        else:
            largest = index
        
        if right < self.heapSize and self.array[right] > self.array[largest]:
            largest = right

        if largest != index:
            self.array[index],self.array[largest] = self.array[largest],self.array[index]
            #print self.array
            self.maxHeapify(largest)
    
    def minHeapify(self,index):
        left = self.left(index)
        right = self.right(index)
        
        if left < self.heapSize and self.array[left] < self.array[index]:
            smallest = left
        else:
            smallest= index
        if right < self.heapSize and self.array[right] < self.array[smallest]:
            smallest = right

        if smallest != index:
            self.array[index],self.array[smallest] = self.array[smallest],self.array[index]
            #print self.array
            self.minHeapify(smallest)

    def buildMaxHeap(self):
        for i in range((self.heapSize/2),-1,-1):
            self.maxHeapify(i)
    
    def buildMinHeap(self):
        for i in range((self.heapSize/2),-1,-1):
            self.minHeapify(i)

    def __str__(self):
        return str(self.array)

    def __repr__(self):
        return str(self.array)


def heapSort(array):
    heap = Heap(array)
    heap.buildMaxHeap()
    for i in range((len(array)),0,-1):
        heap.heapSize -=1
        heap.array[heap.heapSize], heap.array[0] = heap.array[0],heap.array[heap.heapSize]
        heap.maxHeapify(0)
    return heap.array


arr = [16,14,10,8,7,9,3,2,4,1]
h = Heap(arr)

a2 = [16,4,10,14,7,9,3,2,8,1]
h2=Heap(a2)

print heapSort(arr)
