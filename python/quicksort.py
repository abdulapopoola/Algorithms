def quicksort(array,start=None,end=None):
    if start is None:
        start = 0
    if end is None:
        end = len(array)-1
    if start >= end:
        return
    ind = partition(array,start,end)
    quicksort(array,start,ind-1)
    quicksort(array,ind+1,end)
    return array

def partition(array,start,end):
    pivot = array[end]
    i = start-1
    for j in range(start,end):
        if array[j] <= pivot:
            i = i + 1
            array[i],array[j] = array[j], array[i]
    array[end],array[i+1]=array[i+1],array[end]
    return i+1

print quicksort([1,4,6,2,52,0,5])
