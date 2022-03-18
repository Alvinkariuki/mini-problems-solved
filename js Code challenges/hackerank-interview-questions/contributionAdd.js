function maxValue(n, rounds) {
  // Initialize array based on n
  let contribH = new Array(n).fill(0);

  for (let i = 0; i < rounds.length; i++) {
    for (let j = rounds[i][0]; j <= rounds[i][1]; j++) {
      contribH[j] += rounds[i][2];
    }
  }
  contribH.pop();
  //   return Math.max(...contribH);
  return contribH;
}

console.log(
  maxValue(6, [
    [1, 2, 100],
    [2, 6, 652],
    [2, 3, 100],
  ])
);
