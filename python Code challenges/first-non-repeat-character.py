def first_non_repeat(string):
    if len(string) == 0:
        return string
    #initialize dictionary
    string_dicti = {}
    for char in string.lower():
        string_dicti[char] = 0
    
    for char in string.lower():
        string_dicti[char] += 1
    
    # small case
    if(min(string_dicti, key=string_dicti.get) in string and string_dicti[min(string_dicti, key=string_dicti.get)] == 1):
        return min(string_dicti, key=string_dicti.get)
    # upper case
    elif(min(string_dicti, key=string_dicti.get).upper() in string and string_dicti[min(string_dicti, key=string_dicti.get)] == 1):
        return min(string_dicti, key=string_dicti.get).upper()
    #only one value
    else:
        return ""
    

print(first_non_repeat("aaaabb"))