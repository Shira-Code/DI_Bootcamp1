#tuple is data collection similar to lists but are read only and can't be modified after creation
#tuples are read-only lists
#usually store sensitive & unchanging information

a_tuple = (1,2,3,)


#ACCESS - SAME WITH LIST

first_value = a_tuple[0]
last_value = a_tuple[-1]

for val in a_tuple:
    print(val)

#a_tuple[0] = 5 #leads to error

sub_tuple = a_tuple[0:3]
print(sub_tuple)

b_tuple = ("Shira","Tel Aviv",21)

print(b_tuple)
