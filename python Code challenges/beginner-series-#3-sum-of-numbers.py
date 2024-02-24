def get_sum(a,b):
    if a > b:
        return sum(num for num in range(b, a+1))  
    elif a < 0 and b < 0:
        return -sum(num for num in range(a, (b)+1))
    return sum(num for num in range(a, b+1))

    
print(get_sum(-5,-5))