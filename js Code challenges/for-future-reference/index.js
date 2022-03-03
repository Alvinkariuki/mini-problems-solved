function arrToKey(arr) {
  let multiDimArrHolder = [];
  for (let i = 0; i < arr.length; i++) {
    multiDimArrHolder.push(Object.assign({}, arr[i]));
  }

  // Rename keys
  multiDimArrHolder = multiDimArrHolder.map((item) => {
    return {
      first: item["0"],
      sec: item["1"],
      third: item["2"],
    };
  });

  console.log(multiDimArrHolder[3].third);
}

arrToKey([
  [1, 2, 3],
  [2, 5, 9],
  [3, 20, 4],
  ["Kiv", "steve", "leave"],
]);
