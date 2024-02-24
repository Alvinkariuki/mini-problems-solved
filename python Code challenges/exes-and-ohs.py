# from collections import Counter

# def xo(s):
#     d = Counter(s.lower())
#     print(d.get('x', 0))



def xo(s):
    return [*s.lower()].count('x') == [*s.lower()].count('o')
print(xo("Xoxoxoxoxo"))
