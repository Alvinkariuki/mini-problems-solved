def generate_hashtag(s):

    s = s.rstrip().lstrip()

    s = s.lower()

    strArr = s.split()

    strArr = [s[0].upper()+s[1:] for s in strArr]

    combined_string = "".join(strArr)

    if len(combined_string) > 140 or len(combined_string) == 0:
        return False
    return "#"+combined_string
    
print(generate_hashtag("cCodeWars is nice"))