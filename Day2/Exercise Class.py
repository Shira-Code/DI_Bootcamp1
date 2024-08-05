list1 =[5,10,15,20,25,50,20]

idx = list1.index(20)  #returns first index of value 20

list1[idx] = 200

print(list1)

idx = list1.index(20)  #returns first index of value 20
print(idx)

#list1.remove(20)
#print(list1)

#find value 20 in the list, and if it is present, replace it with 200
# only update the first occurce

#expected out put
#list1 = [5, 10, 15, 200, 25, 50, 20]

#while is less efficient, it loops until it finds the value
while 20 in list1:
    idx = list1.index(20)
    list1[idx] = 200
print(list1)

#for is more efficient, it only loops once
for i in range(0, len(list1)): #range(len(list1)) (don't need to write "0" as it produces range from 0 until 7 length of list1
    print(i) #displays the index value sequentially
    if list1[i] == 20:
        list1[i] = 200
print(list1)    