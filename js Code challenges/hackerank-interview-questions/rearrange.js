function minDiff(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let sumOfAbsoluteDiff = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sumOfAbsoluteDiff += Math.abs(arr[i] - arr[i + 1]);
  }

  console.log(sumOfAbsoluteDiff);
}

minDiff([5, 1, 3, 7, 3]);
