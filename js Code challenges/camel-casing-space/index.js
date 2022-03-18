function isUpper(character) {
  return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}

function camelCaseSeperator(string) {
  if (string.length === 0) return string;
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    if (isUpper(string[i])) {
      arr.push(" ");
      arr.push(string[i]);
      continue;
    }
  }

  console.log(arr.join().replace(/,/g, ""));
}

camelCaseSeperator("");
