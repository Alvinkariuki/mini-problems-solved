def two_sum(numbers, target):
    exptd_tuples = []
    for i in range(len(numbers)):
        for j in range(len(numbers)-1):
            if (numbers[j+1] != numbers[i]) and numbers[j+1] + numbers[i] == target:
                print(i,j,numbers[i], numbers[j+1])
    return []

print(two_sum([2, 1, 3], 4))