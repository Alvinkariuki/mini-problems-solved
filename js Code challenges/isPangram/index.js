function isInObjValidator(arr, alphaObj) {
  for (let i = 0; i < arr.length; i++) {
    alphaObj[arr[i]] += 1;
  }

  //   return Object.keys(alphaObj).find((key) => alphaObj[key] === 0)
  //     ? false
  //     : true;

  return alphaObj;
}

function isPangram(x) {
  // Remove all white spaces from string
  x = x.replace(/\s/g, "");
  x = x.toLowerCase();

  // convert it to char array
  x = x.split("");

  // Create alphabet array
  let alphaBetArr = "abcdefghijklmnopqrstuvwxyz".split("");

  // Convert alphabet array to object
  let alphObj = alphaBetArr.reduce((acc, curr) => ((acc[curr] = 0), acc), {});

  console.log(isInObjValidator(x, alphObj));
}

isPangram("Cwm fjord bank glyphs vext quiz");
