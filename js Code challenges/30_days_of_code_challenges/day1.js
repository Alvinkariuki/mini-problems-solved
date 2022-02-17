const vowels = ["a", "i", "u", "e", "o"];
function vowelConsonants(s) {
  strArr = s.split("");
  let vowelOrderedList = [];

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      console.log(strArr[i]);
    }
  }

  for (let i = 0; i < strArr.length; i++) {
    if (!vowels.includes(strArr[i])) {
      console.log(strArr[i]);
    }
  }
}

vowelConsonants("javascriptloops");
