function reverseString(s) {
  try {
    if (typeof s !== "string") throw new Error("s.split is not a function");

    // split string to an array
    s = s.split("");

    // reverse string array
    s.reverse();

    // join string array to string
    s = s.join("");
    console.log(s);
  } catch (e) {
    console.log(e.message, "\n", s);
  }
}

reverseString(1234);
