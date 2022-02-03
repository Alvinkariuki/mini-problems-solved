def isOdd(n):
    if n % 2 == 0:
        return False
    else:
        return True
def rangeCheck(n, r1, r2):
    r2 += 1
    R = range(r1, r2, 1)
    return n in R
    

if __name__ == '__main__':
    n = int(input().strip())
    
    if isOdd(n):
        print("Weird")
    elif not isOdd(n) and rangeCheck(n, 2, 5):
        print("Not Weird")
    elif not isOdd(n) and rangeCheck(n, 6, 20):
        print("Weird")
    elif not isOdd(n) and n > 20:
        print("Not weird")