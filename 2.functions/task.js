// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i +=1) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];   
  }
  
  avg = sum / arr.length;
  avg = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i +=1) {
      sum += arr[i];   
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
    max = -Infinity;
    for (let k = 0; k < arrOfArr.length; k +=1){
      sum = func(arrOfArr[k]);
      if (sum > max) {
        max = sum;
      }
    }    
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
    let min = Infinity;
    let max = -Infinity;
    let modal = 0;

    for (let i = 0; i < arr.length; i +=1) {
      if (min > arr[i]) {
        min = arr[i];
      }
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    
  return modal = Math.abs(max - min);
}
