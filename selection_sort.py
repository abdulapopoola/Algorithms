def selection_sort(list_of_values):
    for i in range(len(list_of_values)-1,-1,-1):
        max_index = 0
        for j in xrange(0,i+1):
            if list_of_values[j] > list_of_values[max_index]:
                max_index = j
        list_of_values[i],list_of_values[max_index] = list_of_values[max_index],list_of_values[i]  
    return list_of_values

                
