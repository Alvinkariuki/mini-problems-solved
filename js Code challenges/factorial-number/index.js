function factorialFunction(n) {
  if (n >= 1) {
    return n * factorialFunction(n - 1);
  } else {
    return 1;
  }
}

console.log(factorialFunction(6));
