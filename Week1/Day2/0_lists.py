#list (array)
# can hold any type of values
# to access values inside, we use indexing (0-first vlaue inside the list)
#mutalbe - can be changed

#access

a_list = [] #a list

print(type(a_list))

a_list = [1,2,3,4,5,6,7]
    #index 0  1  2  3  4  5  6   len(a_list)
#access

# use indexing

first_value = a_list[0]
print(first_value)

last_value = a_list[-1] #last value
print(last_value)

#slicing
sub_list = a_list[0:4] # 1,2,3

print(sub_list)
#starting point - 0 - icluded
#end point - 4 - excluded

list_size = len(a_list)
print(list_size)

#len(a_list)//2 gives middle index of the list can also be sublist_b = a_list[len(a_list)//2:] colon is used to get everything after the middle
sublist_b = a_list[len(a_list)//2:len(a_list)]

print(sublist_b)

#to run until the end - just leave it blank after the ':' sign
#a_list[3] - starts at index 3 and goes to the end

#MODIFYING

b_list =['a','c',2,10]
    #0 1 2 3
b_list[2] = 20

print(b_list)

b_list[0] = b_list[0].capitalize()

print(b_list)

b_sublist = b_list[:2] #don't need to specify 0, it can be [:]

b_sublist[0] = "B"

print(b_sublist)
print(b_list)

#DELETION

c_list = [1,2,3,3]

c_list.remove(3) #removes the first occurence of 3

print(c_list)

deleted_value = c_list.pop() #removes the last value / element
                                #pop stores the deleted value in deleted_value

print(c_list)
print(deleted_value)

c_list.pop(1) # using index to remove
print(c_list)