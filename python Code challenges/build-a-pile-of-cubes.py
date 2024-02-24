def find_nb(m):
    sum_cube = 0
    num_i = 1
    
    while sum_cube < m:
        sum_cube += num_i**3
        if sum_cube < m:
            num_i += 1
    
    if sum_cube == m:
        return num_i
    
    return -1

print(find_nb(26825883955641))