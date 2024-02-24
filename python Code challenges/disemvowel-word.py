'''
    Todos
    [] List all vowels
    [] remove vowels from string
        [] Loop through vowels against string
        [] Remove found vowel
    [] return final string
'''

def disemvowel(string_):
    vowels = "aeiouAEIOU"
    for i in range(len(vowels)):
        string_ = string_.replace(vowels[i], "")
    return string_   
     
disemvowel("This website is for losers LOL!")