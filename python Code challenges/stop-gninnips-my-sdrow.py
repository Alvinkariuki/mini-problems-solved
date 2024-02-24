'''
    TODO:
        [✔️] Split string into array based on the space
        [✔️] Loop through the array of split words
        [✔️] Reverse the word
            [✔️] If the word has a length of 5 or more
            [✔️] Else leave word alone
        [✔️] Return the string with reversed words or not
'''

def spin_words(sentence):
    # Your code goes here
    word_array = sentence.split(" ")
    word_rf = ""
    
    for i in range(len(word_array)):
        if len(word_array[i]) >= 5:
            word_array[i] = word_array[i][::-1]
            word_rf +=  word_array[i] + ' '
        else:
            word_rf += word_array[i] + ' '
            

    return word_rf.rstrip()


print(spin_words("Hey fellow warriors"))