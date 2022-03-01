function somefunc(meal_cost, tip_percent, tax_percent) {
  let soln =
    meal_cost +
    meal_cost * (tip_percent / 100) +
    meal_cost * (tax_percent / 100);

  console.log(Math.round(soln));
}

somefunc(10.25, 17, 5);
