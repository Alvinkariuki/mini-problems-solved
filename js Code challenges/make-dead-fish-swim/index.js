function parse(string) {
  let value = 0;
  let outArr = [];
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value = value ** 2;
        break;
      case "o":
        outArr.push(value);
        break;
    }
  }
}

parse("iiisxxxdoso");
