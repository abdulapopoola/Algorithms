def bubble_sort(list_of_values):
    length = len(list_of_values)
    for i in xrange(length-1,0,-1):
        for j in xrange(i):
            if list_of_values[j] > list_of_values[j+1]:
                list_of_values[j],list_of_values[j+1]=list_of_values[j+1],list_of_values[j]
    return list_of_values


