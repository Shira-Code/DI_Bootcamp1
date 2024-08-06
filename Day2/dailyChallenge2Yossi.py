#option 1

word ="ttppplleee"

letters = []

i = 0 #while loops index must be created outside of the loop
current_char = word[i] 

while i < len(word):

    if word[i] != current_char:
        current_char = word[i]
        letters.append(current_char)

    i += 1

#print(letters)
#option 2


word ="ttppplleee"
current_char = ""
letters = []

 
for i in range(len(word)):
   
    if  current_char != word[i]:
        current_char = word[i]
        letters.append(current_char)

print(letters)

#option3

word ="ttppplleee"
result = ""
current_char = ""

fori in range(len(word)):
    if current_char != word[i]:
        current_char = word[i]
        result += word[i]

print(result)



#option 4

word ="ttppplleee"
result = word[0] #t

for i in range(1, len(word)):
    if result[-1] != word[i]:
        result += word[i]
        

print(result)


# string[i] == current_char:

#     if string[i]   != current_char:
#         .append(string[i])
#     current_char = string[i]

#     current_char = string[i]

#     i += 1