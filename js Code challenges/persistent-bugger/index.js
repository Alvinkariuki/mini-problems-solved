function persistence(num) {
  let persistenceNum = 0;
  if (num.toString().length > 1) {
    let numHolder = num.toString().split("");
    do {
      let multiplier = 1;
      for (let i = 0; i < numHolder.length; i++) {
        multiplier *= parseInt(numHolder[i]);
      }
      numHolder = multiplier.toString().split("");
      persistenceNum++;
    } while (numHolder.length > 1);

    return persistenceNum;
  }
  return persistenceNum;
}
