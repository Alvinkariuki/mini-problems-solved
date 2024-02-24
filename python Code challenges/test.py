# from audioop import reverse


# def minTime(files, numCores, limit):
#     # Sort the list files in order of code size
#     files.sort(reverse=True)
#     print(files)
    
#     # # Loop through array of files
#     # optTime = 0
#     # counter = 0
#     # for num in files:
#     #     if num % numCores == 0 and counter < limit:
#     #         optTime += (num // numCores)
#     #         counter += 1
#     #     else:
#     #         optTime += num
    
#     # return optTime

# if __name__ == "__main__":
#     minTime([130291875, 474356040, 1, 8], 5, 3)

def sum_digits(digits):
    sum_of_digits = 0 
    digits = abs(digits)
    
    while digits > 0:
        sum_of_digits += int(digits % 10)
        digits /= 10
    
    return sum_of_digits


print(sum_digits(123))

