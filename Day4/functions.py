# print(f'''hello
# world
# hello
# world
# hello
# world''')    #print is function

# #'def' key word in creating funciton
# def say_hello():
#     print('hello there!')

# say_hello()

# #with parameters

# def say_hello(name):
#     print(f'hello {name}!')

# adv_say_hello = ('Juliana') #call the function

# #return

# def say_hello(name):
#     return f'hello {name}!'

# print(adv_say_hello('Juliana'))  #print and call the function

# #argument: poitional and keyword

def adv_say_hello(name:str, language:str = 'en') -> str: #default value, 2nd argument is not a must, if not entered will be en
    '''gives a greeting depending on the language''' #doc sring
    
    if language == 'he':
        return f'Shalom {name}!'
    
    elif language == 'pt':
        return f'oi {name}!'
    
    else:
        return "unknown language"
    
print(adv_say_hello('Juliana', 'he')) #positional arguments
print(adv_say_hello(language='he', name='Juliana'))#keyword arguments
print(adv_say_hello("juliana", language='pt')) #mixed type arguments: the first one has to be the positional
print(adv_say_hello("juliana")) #default value for language ' "en"
print(adv_say_hello("juliana", 'fr'))#if you don't need the default, you can specify it in the function

print(adv_say_hello.__doc__)
#print(adv_say_hello.__annotations__)
print(print.__doc__)
