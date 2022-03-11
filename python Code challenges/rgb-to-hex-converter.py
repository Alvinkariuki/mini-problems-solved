def rgb(r, g, b): 
    holdArr = [r, g, b]
    holdArr = [255 if value > 255 else value for value in holdArr]
    r, g, b = [0 if value < 0 else value for value in holdArr]
    
    return ('%02X%02X%02X' % (r, g, b))



print(rgb(199, 375, -20))