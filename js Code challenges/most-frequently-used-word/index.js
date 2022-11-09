const numOfOccurrences = (array, arrIdx) => {
  return array.reduce((acc, curr) => {
    if (curr === arrIdx) acc++;
    return acc;
  }, 0);
};

function topThreeWords(text) {
  /**
   * TODOS
   * [✔️] Return empty array if text is empty
   * [✔️] Remove whitespaces
   * [✔️] Lowercase the words
   * [✔️] Create an array from cleaned array of words
   * [✔️] Create an object that tracks the counter of the reoccuring word
   * [] Return top-2, top-1 words if conatins < 3 unique words
   */
  if (text.length <= 0 || !text.match(/[a-z]/i)) {
    return [];
  }

  const regex = /[`~!@#$%^&*()_|+\-=?;:",.<>\{\}\[\]\\\/]/gi;
  let textArr = text
    .replace(regex, "")
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((item) => item !== "");

  let textObj = {};

  for (let i = 0; i < textArr.length; i++) {
    textObj[textArr[i].trim()] = numOfOccurrences(textArr, textArr[i].trim());
  }

  return Object.keys(textObj)
    .sort((a, b) => textObj[b] - textObj[a])
    .slice(0, 3);
}

console.log(
  topThreeWords(
    `In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`
  )
);
