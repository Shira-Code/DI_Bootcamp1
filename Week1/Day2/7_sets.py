#data collection with no duplicates can hold only unique values
#sets are mutable, they can chage
#sets don't have indexes, they are not ordered

a_set ={1,2,3,1,2,3} #removes all duplicates

#a_set[0] returns error , cannot access by index
print(a_set)

#modification
a_set.add(10)

print(a_set)

a_set.remove(10)
print(a_set)

a_set.pop()  # randomly removes a value
print(a_set)


