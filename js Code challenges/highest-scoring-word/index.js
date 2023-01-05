function calculateArrayScore(arr, alphabetArray) {
  let score = 0;

  return arr.reduce((acc, val) => {
    return (acc += alphabetArray.indexOf(val) + 1);
  }, 0);
  // Calculate value of each character
  // for (let i = 0; i < arr.length; i++) {
  //   score += alphabetArray.indexOf(arr[i]) + 1;
  // }

  // return score;
}

function highScore(x) {
  x = x.split(" ");
  let alphaBtArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let wordScoreIdx = new Array(x.length);

  //   Take each index and calculate its value based on
  for (let i = 0; i < x.length; i++) {
    // Instantiate every word into an array of characters
    let charHolder = x[i].split("");

    // calculate the score of each character array
    wordScoreIdx[i] = calculateArrayScore(charHolder, alphaBtArr);
  }

  return x[wordScoreIdx.indexOf(Math.max(...wordScoreIdx))];
}

console.log(highScore("man i need a taxi up to ubud"));
