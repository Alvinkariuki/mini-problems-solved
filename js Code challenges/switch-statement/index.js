function getLetter(s) {
  let letter;
  // Write your code here
  let returnA = ["a", "e", "i", "o", "u"];
  let returnB = ["b", "c", "d", "f", "g"];
  let returnC = ["h", "j", "k", "l", "m"];
  let returnD = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  switch (s) {
    case "a e i o u".includes(s.charAt(0)):
      letter = "A";
    case "b c d f g".includes(s.charAt(0)):
      letter = "B";
  }

  console.log(letter);
}
getLetter("a");
