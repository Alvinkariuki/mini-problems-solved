from itertools import permutations as permutes

# def permutations(s):
#     string_arr = list(map(str, s))
#     array_combo_holder = []
    
#     for i in range(len(string_arr)):
#         string_arr = string_arr
        
#         if len(string_arr) > 1:
#             for j in range(len(string_arr)-1):
#                 holder = string_arr[j+1]
#                 string_arr[j+1] = string_arr[j]
#                 string_arr[j] = holder
                
#                 array_combo_holder.append(''.join(string_arr))
#         else: 
#             array_combo_holder.append(''.join(string_arr))
    
#     print( sorted(set(array_combo_holder)) )


def permutations(s):
    a = permutes(s)
    combo_arr = []
    for j in list(a):
        combo_arr.append(''.join(j))
    
    return sorted(set(combo_arr))

print(permutations("abcd"))


print(list(range(5)))