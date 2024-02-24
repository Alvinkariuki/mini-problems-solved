def is_even(n): 
    flt_boolean = False
    if len(str(abs(n)).split(".")) > 1 and int(str(abs(n)).split(".")[1]) == 0:
        if int(str(abs(n)).split(".")[1]) == 0:
            flt_boolean = True
    elif n == 0:
        flt_boolean = True 
        
    
    return True if n % 2 == 0 or flt_boolean else False
    

print(is_even(-4))