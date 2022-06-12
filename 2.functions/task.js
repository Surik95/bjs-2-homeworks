// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (i = 0; i < arr.length; i +=1) {
      min > arr[i] ? min = arr[i] : min;
      max < arr[i] ? max = arr[i] : max;
      sum += arr[i]    
  }
  
  avg = sum / arr.length;
  avg = parseFloat(avg.toFixed(2))

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (i = 0; i < arr.length; i +=1) {
      sum += arr[i]    
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
    max = -Infinity
    for (k = 0; k < arrOfArr.length; k +=1){
        sum = func(arrOfArr[k]);
        sum > max ? max = sum : max;
    }    
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
    let min = Infinity
    let max = -Infinity
    let modal = 0;

    for (i = 0; i < arr.length; i +=1) {
        min > arr[i] ? min = arr[i] : min;
        max < arr[i] ? max = arr[i] : max;
    }
        
    if (min >= 0 && max >= 0) {
        modal = max - min;
        return Math.abs(modal);
    } else if (min <=0 && max <= 0) {
        modal = min - max;
        return Math.abs(modal);
    } else {
        modal = Math.abs(max) + Math.abs(min);
        return modal;
    }
}
