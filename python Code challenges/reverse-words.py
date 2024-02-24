def reverse_words(text):
    text_arr = text.split(" ")
    return " ".join([word[::-1] for word in text_arr])
  

print(reverse_words("double  spaced  words"))