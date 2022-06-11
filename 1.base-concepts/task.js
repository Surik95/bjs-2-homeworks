'use strict';

// этот код работает в современном режиме

function solveEquation(a, b, c) {
  const arr = [];
  // код для задачи №1 писать здесь
  
  let discriminant = b ** 2 - 4 * a * c;
  console.log(discriminant)
  

  if (discriminant === 0) {
    arr.push(-b/(2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }


  return arr; // array
}

//код для задачи № 2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //привожу все значение к цифровому формату  
  let percentNumber =  Number(percent) / 100
  let contributionNumber = Number(contribution)
  let amountNumber = Number(amount)

  //проверяю что значения являются цифрами
  if (isNaN(percentNumber)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "test"`
    return totalAmount
  } else if (isNaN(contributionNumber)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "test"`
    return totalAmount
  } else if (isNaN(amountNumber)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "test"`
    return totalAmount
  }

  //определяю ткло кредита

  let loanBodu = amountNumber - contributionNumber;

  //определяю кол-во месяцев

  let loanTerm;
  let today = new Date;
  let differenceMonth = date.getMonth() - today.getMonth();
  let differenceYear = date.getFullYear() - today.getFullYear();

  //проверяю что не указана неккоректная дата

  if (differenceYear < 0 ) {
    totalAmount = `Параметр срок ипотеки содержит неправильное значение`
    return totalAmount
  } else {
    loanTerm = differenceYear * 12 + differenceMonth}
  
  //рассчитываю ежемесячный платеж

  percentNumber =  percentNumber / 12;
  let monthlyPayment = loanBodu * (percentNumber + (percentNumber / (((1 + percentNumber)**loanTerm) - 1))); 
 
  //рассчитываю сумму кредита
 
  totalAmount = monthlyPayment * loanTerm

  return parseFloat(totalAmount.toFixed(2));
}

