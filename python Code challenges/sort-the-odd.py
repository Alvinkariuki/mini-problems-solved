import copy

def sort_array(source_array) -> list:
    track = {}
    temp_arr = []
    
    # remove odd
    for i in range(len(source_array)):
        if source_array[i] % 2 != 0:
            temp_arr.append(source_array[i])            
        else:
            track[str(i)] = source_array[i]
    
    temp_arr = sorted(temp_arr)
    
    for i in range(len([*track.keys()])):
        if int([*track.values()][i]) % 2 == 0:
            temp_arr.insert(int([*track.keys()][i]), track[[*track.keys()][i]])

    return temp_arr


print(sort_array([5, 3, 2, 8, 1, 4]))

