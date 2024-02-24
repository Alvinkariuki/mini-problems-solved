import math
def square_digits(num) -> int: 
    return int("".join([str((int(digit))**2) for digit in str(num)]))
    


print(square_digits(765))