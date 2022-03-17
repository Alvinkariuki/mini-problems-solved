function zeroToEnd(arr) {
  arr.map(() => {
    arr.push(arr.splice(arr.indexOf(0), 1).pop());
  });

  return arr;
}

console.log(
  zeroToEnd([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
);
