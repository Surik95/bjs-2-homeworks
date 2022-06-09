'use strict';

// этот код работает в современном режиме

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  arr = [];
  
  let discriminant = b ** 2 - 4 * a * c;
  console.log(discriminant)
  
  if (discriminant < 0) {
    arr = []
  } else if (discriminant === 0) {
    arr.push(-b/(2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }


  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
