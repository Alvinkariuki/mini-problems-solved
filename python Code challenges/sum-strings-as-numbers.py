'''
    Todos
    [] Convert strings to integers
    [] Find the sum of the two integers
    [] Return the sum in string format
'''
# Normal Summation
# Eval 
# Type casting
# For loop

# string, array, integer, float

# def sum_strings(x, y):
#     sum = int(x) + int(y)
    
#     return str(sum)

# def sum_strings(x, y):
#     sum = x + '+' + y
#     return eval(sum)
# import sys

# def sum_strings(x, y):
#     sum = 0
#     array_of_string_value = [x, y]
  
#     for value in array_of_string_value:
#         if len(value) > 0 and value != '0':
#             sum += int(sys.intern(value))

#     return str(sum)


def sum_strings(x, y):
    l, res, carry = max(len(x), len(y)), "", 0
    x, y = x.zfill(l), y.zfill(l)
    for i in range(l-1, -1, -1):
        carry, d = divmod(int(x[i]) + int(y[i]) + carry, 10)
        res += str(d)
    return ("1" * carry + res[::-1]).lstrip("0") or "0"

        


print(sum_strings('10', '10'))