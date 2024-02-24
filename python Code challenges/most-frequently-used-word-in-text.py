'''
    Todos
    [✔️] Remove commas and fullstops from text
    [✔️] convert text to lowercase
    [✔️] create dictionary that has keys as the words
    [✔️] Loop through words and add counter for occurrence
    [✔️] filter top 3 words
'''
import re

def top_3_words(text):
    # The function will create an array of words if there are alphabetical characters
    are_words_filter = lambda txt: re.sub("[^a-zA-Z0-9']+", " ", text.lower().strip()).split(' ') if any(char.isalpha() for char in txt) else []
    
    altered_text_array = are_words_filter(text)
    
    # Allocate each word it's own key reference
    word_count_dicti = dict.fromkeys(altered_text_array, 0)
    
    # Count occurrence of a word
    for word in altered_text_array:
        word_count_dicti[word] += 1
        
    
    word_count_dicti.pop('', None)
    return sorted(word_count_dicti, key=word_count_dicti.get, reverse=True)[:3]

print(top_3_words(" ///wont- won't won't won't"))

