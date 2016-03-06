def merge_count_inversions(array):
    if len(array)== 1:
        return array,0
    mid = len(array)/2
    left,left_count = merge_count_inversions(array[:mid])
    right,right_count = merge_count_inversions(array[mid:])
    final_merge, final_count = count_inversions(left,right)
    return final_merge,final_count+right_count+left_count

def count_inversions(left_array,right_array):
    merged = []
    inversion_count = 0
    left_index = 0
    right_index = 0

    while left_index < len(left_array) and right_index<len(right_array): 
        if left_array[left_index] <= right_array[right_index]:
            merged.append(left_array[left_index])
            left_index +=1
        elif right_array[right_index] < left_array[left_index]:
            merged.append(right_array[right_index])
            right_index +=1
            inversion_count += len(left_array[left_index:])
    if left_index < len(left_array):
        merged.extend(left_array[left_index:])
    elif right_index< len(right_array):
        merged.extend(right_array[right_index:])
    return merged, inversion_count

nums = open('IntegerArray.txt','r')
arr = []

for line in nums:
    arr.append(int(line))

print merge_count_inversions(arr)
