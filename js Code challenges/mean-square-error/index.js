const solution = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    throw Error("Arrays not of same length");
  }

  return (
    firstArray.reduce((acc, _, currIdx) => {
      return acc + Math.abs(firstArray[currIdx] - secondArray[currIdx]) ** 2;
    }, 0) / firstArray.length
  );
};

console.log(solution([-1, 0], [0, -1] ));
