'''
    Todos 
     [✔️] create alphabet dictionary
     [✔️] convert words into lowercase
     [✔️] split words into an array
     [✔️] add +1 if word occurs
     [✔️] find letter that has 0 occurrences if none return true
'''

def is_panagram(sentence):
    alphabet_chars = 'abcdefghijklmnopqrstuvwxyz'
    dictionary_of_alphabet_values = {}
    for character in alphabet_chars:
        dictionary_of_alphabet_values[character] = 0
    
    # remove non alphabetical characters from  string
    sentence = ''.join([ character for character in sentence.lower() if character.isalpha()])
    
    # add one for character that exists in the alphabet dictiionary
    for character in sentence:
        dictionary_of_alphabet_values[character] += 1
    
    if 0 in dictionary_of_alphabet_values.values():
        return False
    else:
        return True
    
    
        

print(is_panagram('The quick brown fox jumps over the lazy dog'))