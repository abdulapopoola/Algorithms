def quicksort(array,start=None,end=None):
    count = len(array[start:end]) 

    if start is None:
        start = 0
    if end is None:
        end = len(array)-1
    if start >= end:
        return 0,None
    array[start],array[end] = array[end],array[start]
    ind = partition(array,start,end)
    left,a = quicksort(array,start,ind-1)
    right,a = quicksort(array,ind+1,end)
    return left + count + right,array

def partition(array,start,end):
    pivot = array[start]
    i = start+1
    for j in range(start+1,end+1):
        if array[j] <= pivot:
            array[i],array[j] = array[j], array[i]
            i = i + 1
    array[start],array[i-1]=array[i-1],array[start]
    return i-1

nums = open('QuickSort.txt','r')
arr = []

for line in nums:
    arr.append(int(line))

#arr = [2,1,4,6,8,2,3,1]

ans=quicksort(arr)
print ans

