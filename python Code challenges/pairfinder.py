def pairFinder(n, list_of_pairs):
    list_of_pairs.sort()
    num_dicti = {}
    skip = False
    for i in range(n-1):
        if skip:
            skip = False
            continue
        elif list_of_pairs[i] ==  list_of_pairs[i+1]:
            num_dicti[i]= 1
            skip = True
            continue
        else: 
            num_dicti[i]= 0 
        
    return sum(value == 1 for value in num_dicti.values())

if __name__ == '__main__':
    print(pairFinder(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))