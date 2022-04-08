function validateEachParam(strVal, strArr) {
  return (strVal.startsWith("0") && strVal.length > 1) ||
    /\r|\n/.exec(strVal) ||
    strVal < 0 ||
    strVal > 255 ||
    /[a-zA-Z]/.test(strVal) ||
    /^\s|\s$/.test(strVal) ||
    strArr.length > 4 ||
    strArr.length < 4 ||
    strVal.length === 0
    ? false
    : true;
}

function isValidIp(str) {
  let strArr = str.split(".");
  for (let i = 0; i < strArr.length; i++) {
    if (!validateEachParam(strArr[i], strArr)) return false;
  }
  return true;
}

console.log(isValidIp("187.80..95"));
