function isUpper(character) {
  return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}

function camelCaseSeperator(string) {
  return string.split("").reduce((acc, val) => {
    isUpper(val) ? (acc += " " + val) : (acc += val);
    return acc;
  }, "");

  // for (let i = 0; i < string.length; i++) {
  //   if (isUpper(string[i])) {
  //     arr.push(" ");
  //     arr.push(string[i]);
  //     continue;
  //   }
  //   arr.push(string[i]);
  // }

  // console.log(arr.join().replace(/,/g, ""));
}

console.log(camelCaseSeperator("camelCase"));
