def mergesort(array):
    if len(array)== 1:
        return array
    mid = len(array)/2
    left = mergesort(array[:mid])
    right = mergesort(array[mid:])
    return merge(left,right)

def merge(left_array,right_array):
    merged = []
    left_index = 0
    right_index = 0

    while left_index < len(left_array) and right_index<len(right_array): 
        if left_array[left_index] <= right_array[right_index]:
            merged.append(left_array[left_index])
            left_index +=1
        elif right_array[right_index] < left_array[left_index]:
            merged.append(right_array[right_index])
            right_index +=1
    if left_index < len(left_array):
        merged.extend(left_array[left_index:])
    elif right_index< len(right_array):
        merged.extend(right_array[right_index:])
    return merged

print mergesort([1,2,5,4,6,7,4,6,87,64,2,3,-1,234])
