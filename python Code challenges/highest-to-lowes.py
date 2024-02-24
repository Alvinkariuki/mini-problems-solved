'''
    Todos
    [✔️] define highest and lowest
        [✔️] Convert the string into an array of digits
        [✔️] Convert the string digits to integers
        [✔️] Sort the array of digits
    [✔️] return highest
        [] Return the last element of array
    [✔️] return lowest
        [] Return the first element of array
'''

def high_and_low(numbers):
    numbers_array = numbers.split(' ')
    numbers_array = list(map(int, numbers_array))
    numbers_array.sort()
    
    # return str(numbers_array[-1]) + " " + str(numbers_array[0])
    return f"{numbers_array[-1]} {numbers_array[0]}"

print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))