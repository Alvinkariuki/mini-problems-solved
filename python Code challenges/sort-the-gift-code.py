
# Solution 1
def sort_gift_code(code):
    sorted_code = sorted(code)
    return ''.join(sorted_code)


# Solution 2
'''
Checklist 
    1. convert string into an array
    2. sort the array manually
'''
def sorted_gift_code(code):
    array_chars = [str(character) for character in code]
    for i in range(len(array_chars)):
        for j in range(0, len(array_chars) - i -1):
            if array_chars[j] > array_chars[j+1]:
                array_chars[j], array_chars[j+1] = array_chars[j+1], array_chars[j]
    print(array_chars)
    pass


print(sort_gift_code("zyxwvutsrqponmlkjihgfedcba"))
# sorted_gift_code('zyxwvutsrqponmlkjihgfedcba')
