def strip_comments(string, markers):
    string_arr = string.split('\n')
    for i in range(len(string_arr)):
        for marker in markers:
            if marker in string_arr[i]:
                string_arr[i] = string_arr[i][:string_arr[i].index(marker)].rstrip()
        
    
    print('\n'.join(string_arr))
        
        
        


strip_comments('watermelons strawberries .\napples ? watermelons strawberries\nlemons avocados oranges . cherries ,', ['=', '?', "'", ',', '@', '#', '-', '.'])