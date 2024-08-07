students = ['harry', 'larry', 'carl', 'tom']

students[1] = 'Chow'
print(students)

def wizard(names_list:list):   #better not to print within function, use return instead
    greetings = []
    for name in names_list:
        greetings.append(f'{name} welcome to Hogwards!')
    
    return greetings #return works like a break, stops everything and won't continuethe loop, must be outside 
    

print(wizard(students))
print(students) #it doesn't change the original list

def selector_heat():
    for i,name in enumerate(students):
        #students [1] = 'Chow'
        students[i] = f'{name}, you are Griffyndor!'

#mutable 

selector_heat()
print(students)

name = 'Avner' #global scope

def say_hi(name):
    name = 'Juliana' #local scope
    return name

print(say_hi(name))
print(name)

#global scope
count = 10

def calculation(a,b):
    global count
    result = a + b
    #result += count
    count += result #can't modify global variable
    return count

print(calculation(5,15))
print(count)

