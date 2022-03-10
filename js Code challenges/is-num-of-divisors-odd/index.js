function Oddity(n) {
  let counter = 1;
  let arr = [n];

  for (let i = 1; i <= n / 2; i++) {
    n % i === 0 ? arr.push(i) : null;
  }

  return arr;
}

console.log(Oddity(800));
