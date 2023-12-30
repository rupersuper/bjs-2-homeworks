"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  // console.log(discriminant);
  if (discriminant < 0) {
    arr = [];
  }
  if (discriminant === 0) {
    arr = [-b / (2 * a)];
  }
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
  // console.log(arr);
}
// solveEquation(4, 8, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payment = s * (p + (p / (Math.pow((1 + p), countMonths) - 1)));
  let total = Number((payment * countMonths).toFixed(2));
  return total;
  // console.log(total);
}
// calculateTotalMortgage(10, 0, 10000, 36)