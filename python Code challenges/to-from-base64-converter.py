import base64

def to_base_64(string):
    to_base_64.number_of_equals = string.count('=')
    to_base_64.has_been_called = True
    string_bytes = string.encode('ascii')
    return base64.b64encode(string_bytes).decode('ascii').replace("=", "")

to_base_64.has_been_called = False

def from_base_64(string):
    string_bytes = base64.b64decode(
        string + '='*to_base_64.number_of_equals 
        if to_base_64.has_been_called and to_base_64.number_of_equals > 0 
        else string + '=='
    )
    return string_bytes.decode('ascii') 


encoded_string = to_base_64("now is the time for all good men to come to the aid of their country=")
print("Encoded: ", encoded_string)
print("Decoded: ",from_base_64(encoded_string))