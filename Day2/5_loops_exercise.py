#accept a number from the user and print its multiplication table

number = 5

table = range(0,6)
results = []
for multiplier in table:
    results.append(number * multiplier)
    print(results)

#[0, 1,2,3,4,5]
#[0,5,10,15,20,25]

#[5*0, 5*1, 5*2, 5*3, 5*4, 5*5]

#input_number = int(input("Enter a number: "))
# for i in range(0, 11):
#     print(i * number) 
        