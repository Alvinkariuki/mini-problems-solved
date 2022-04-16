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

// function parse(data) {
//     let res = [];

//     data.split('').reduce((cur, s) => {
//       if (s === 'i') cur++;
//       if (s === 'd') cur--;
//       if (s === 's') cur = Math.pow(cur, 2);
//       if (s === 'o') res.push(cur);

//       return cur;
//     }, 0);

//     return res;
//   }
