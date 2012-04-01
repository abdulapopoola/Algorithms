def counting_sort(array,number_range):
    counting_array = [0] * (number_range)
    result = [0] * len(array)
    for j in range(len(array)):
        counting_array[array[j]] = counting_array[array[j]] + 1
    for i in range(1,number_range):
        counting_array[i] = counting_array[i] + counting_array[i-1]
    for j in range(len(array)-1,-1,-1):
        result[counting_array[array[j]]-1] = array[j]
        counting_array[array[j]] = counting_array[array[j]] - 1
    return result

print counting_sort([1,5,9,3,7,7,4,1,3,4],10)
