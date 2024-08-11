#args

def welcome(*args): #can be any other name, not only args *name
    for name in args:
        print(f'welcome,{name}')

welcome('harry', 'larry', 'carl', 'tom')
welcome('harry', 1, 5, 'tom')
def some_func(name, age):
    print(f"welcome,{name}")

some_func('harry','carl') #gets an error bc too many values

# **kwargs = keyword arguments

def create_info(**kwargs):  #dictionary
    for key, value in kwargs.items():
        print(key, value)
    print(kwargs)    
        
create_info(name='harry', age=25, address='usa', email='a@a.com')

