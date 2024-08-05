list1 = [5, 10, 15, 20, 25, 50, 20]
# index 0, 1, 2, 3, 5, 6,
#looping by the index
#we would like to do so, mainly to have access to the memory
#for reasons: changing the values inside the original list etc.

#we use reange() function to produce the index range

nubers = range(0, 10)
numbers = list(range(0, len(list1)))
print(nubers)

for i in range (0, len(list1)):
    print(i, list1[i])
    list1[i] *= 10 #same as list1[i] = list1[i] * 10

print(list1)
