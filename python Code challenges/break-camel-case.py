'''
    Todos
    [✔️] Split string into an array based on capitalization
    [✔️] Join array with spaces
    [✔️] Remove whitespace from end or start of string
'''
import re

def solution(s):
    camel_array = re.sub(r"([A-Z])", r" \1", s).split()
    my_string = ""
    for i in range(len(camel_array)):
        my_string = my_string + camel_array[i] + " "
    
    return my_string.strip()

solution("camelToe")

