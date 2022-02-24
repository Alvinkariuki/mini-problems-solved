function getSecondLargest(nums) {
  let uniqueNums = [...new Set(nums)];
  uniqueNums.sort((a, b) => {
    return a - b;
  });

  return uniqueNums[uniqueNums.length - 2];
}

console.log(getSecondLargest([2, 6, 6, 3, 5, 4]));
