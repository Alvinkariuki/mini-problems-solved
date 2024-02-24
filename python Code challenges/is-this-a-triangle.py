def is_triangle(a, b, c):
    tringle_arr = sorted([a,b,c])
    return tringle_arr[0]+tringle_arr[1]>tringle_arr[2]

print(is_triangle(1, 2, 2))

