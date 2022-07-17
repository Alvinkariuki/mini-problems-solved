function spinner(array){
    let toConcat = "";
    for(let i=0; i < array.length; i++){
        if(array[i].length < 5){
            toConcat += " " + array[i];
            continue;
        }

        toConcat += " " + (array[i].split("").reverse()).join('')
    }

    return toConcat.trim();
}

function spinWords(string){
    /**
     * STEPS:
        *[X]  Split entire string into array based on  space between " "
        * 
        *[X]  Split the letters in each index into sub array if length of letters is greater than 5
        * 
        *[X]  Reverse the sub array 
        * 
        *[X]  Merge back the sub array or return unreversed letter
        * 
        *[X]  Merge back the letters array
     */
    let splitString = string.split(" ");

    return spinner(splitString);
}

console.log(spinWords("Welcome"));