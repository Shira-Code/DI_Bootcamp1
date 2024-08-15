# video exercise https://octopus.developers.institute/courses/collection/111/course/470/section/1219/chapter/351


def make_list(num):
    result = []
    for i in range(num):
        result.append(i*2)
    return result

my_list = make_list(100)
print("my list: ", my_list)
print("list: ", list(range(100)))



#generators.

#generators are much more performant than lists. (i.e range > list in performance.)

#So generators are really, really useful when calculating large sets of data.

from time import time

def performance(fn):
    def wrapper(*args, **kwargs):
        t1 = time()
        result = fn(*args, *kwargs)
        t2 = time()
        print(f'took {t2-t1} s')
        return result
    return wrapper

@performance
def long_time():
    print('1')
    for i in range(1000000): #it finishes after.
        i*5

long_time()
print()

@performance
def long_time2():
    print('2')
    for i in list(range(1000000)): #it took longer.
        i*5

long_time2()
print()