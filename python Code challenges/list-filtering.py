def filter_list(l):
    return [num for num in l if isinstance(num, int)]

print(filter_list([1,2,'aasf','1','123',123]))