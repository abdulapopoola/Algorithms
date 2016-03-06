import random

def karger_min_cut(graphIn):
    randomNode1 = random.choice(graphIn.keys())
    randomNode2 = random.choice(graphIn[randomNode1])
    
    newList = graphIn[randomNode1] + graphIn[randomNode2]
    #print randomNode1, randomNode2, newList
    
    newList = [val for val in newList if val!= randomNode2] #Remove cycles and compressed edges
    #print newList

    newList = [val for val in newList if val!= randomNode1]
    #print newList

    graphIn[randomNode1] = newList
    #print graphIn

    graphIn.pop(randomNode2) #remove the old node from the graph
    #print graphIn

    for node in graphIn:
        if node == randomNode1:
            continue
        nodeList = graphIn[node]
        newList = []
        for val in nodeList:
            if val == randomNode2:
                newList.append(randomNode1)
            else:
                newList.append(val)
        graphIn[node] = newList
    #print randomNode1,randomNode2,graphIn

graph = { 
    1 : [2,3], 
    2 : [1,3,4],
    3 : [1,2,4],
    4 : [2,3]
    }


def run(graphIn):
    graphIn = dict(graphIn)
    while(len(graphIn) > 2 ):
        karger_min_cut(graphIn)
    node = graphIn.keys()[0] #Get one of the remaining nodes
    num_of_edges_crossing_cut = len(graphIn[node])
    return num_of_edges_crossing_cut

def repeat_runs(graphIn):
    num_of_runs = len(graphIn)**2
    min_ever = num_of_runs #no of edges is bounded V**2 in dense graph
    for i in xrange(num_of_runs):
        calculated_minimum = run(graphIn) #pass a new copy
        if calculated_minimum < min_ever:
            min_ever = calculated_minimum
        print "run",i,min_ever, calculated_minimum
    return min_ever

c=repeat_runs(graph)
print c

graph = {
    1 : [19,15,36,23,18,39],
    2 : [36,23,4,18,26,9],
    3 : [35,6,16,11],
    4 : [23,2,18,24],
    5 : [14,8,29,21],
    6 : [34,35,3,16],
    7 : [30,33,38,28],
    8 : [12,14,5,29,31],
    9 : [39,13,20,10,17,2],
    10: [9,20,12,14,29],
    11: [3,16,30,33,26],
    12: [20,10,14,8],
    13: [24,39,9,20],
    14: [10,12,8,5],
    15: [26,19,1,36],
    16: [6,3,11,30,17,35,32],
    17: [38,28,32,40,9,16],
    18: [2,4,24,39,1],
    19: [27,26,15,1],
    20: [13,9,10,12],
    21: [5,29,25,37],
    22: [32,40,34,35],
    23: [1,36,2,4],
    24: [4,18,39,13],
    25: [29,21,37,31],
    26: [31,27,19,15,11,2],
    27: [37,31,26,19,29],
    28: [7,38,17,32],
    29: [8,5,21,25,10,27],
    30: [16,11,33,7,37],
    31: [25,37,27,26,8],
    32: [28,17,40,22,16],
    33: [11,30,7,38],
    34: [40,22,35,6],
    35: [22,34,6,3,16],
    36: [15,1,23,2],
    37: [21,25,31,27,30],
    38: [33,7,28,17,40],
    39: [18,24,13,9,1],
    40: [17,32,22,34,38]
    }

c=repeat_runs(graph)
print c
