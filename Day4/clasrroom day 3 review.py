
string = "dodo"
output_dict = {} #empty dictionary value

for i, letter in enumerate(string):
    
    if letter in output_dict:
        output_dict[letter].append(i)
    else:
        output_dict[letter] = [i]
        output_dict.update({letter: [i]})
    
print(output_dict)

#append vs update METHOD    
# method(is a function) come from objects, function is general
