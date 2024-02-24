
'''
    TODO: 
    counter = 0
    return_array = []
    
    [✔️] Loop through array
    [] Add conditional statement to check the followin 
        []i increments the value (initially 0)
        []d decrements the value
        []s squares the value
        []o outputs the value into the return array
    [] return return_array
'''




# # for each
# for character in "charcter is absent":
#     print(character)

# # for loop
# for i in range(len("charcter is absent")):
#     print("charcter is absent"[i])

def parse(data):
    counter = 0
    return_array = []
    for char in data:
        if char == 'i':
            counter += 1
        elif char == 'd':
            counter += -1
        elif char == 's':
            counter = counter**2
        elif char == 'o':
            return_array.append(counter)
    
    return return_array


print(parse("ioioio"))