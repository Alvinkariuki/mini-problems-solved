import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

const calculate = (num) => {
  let num_parse = num;
  let sum = 0;
  let array = [];

  while (num_parse > 0) {
    array.push(num_parse % 10);
    num_parse = parseInt(num_parse / 10);
  }

  array.reverse();
  let pow = 1;
  array.forEach((val) => {
    sum += val ** pow;
    pow++;
  });

  return num === sum;
};

const sumDigPow = (valA, valB) => {
  let array = [];

  while (valB >= valA) {
    if (calculate(valB)) array.push(valB);
    valB--;
  }

  return array.reverse();
};

app.get("/", (req, res) => {
  res.send(sumDigPow(1, 100));
});

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
