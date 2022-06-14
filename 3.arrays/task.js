function compareArrays(arr1, arr2) {
  let result;
  
  // Ваш код
  if (arr1.length === arr2.length) {
    result = arr1.every((item,index) => item[index] === item[index] ) ? true :  false;
  }
  return result; // boolean
}

function advancedFilter(arr) {
  // Ваш код
  return arr.filter(item => (item > 0)).filter(item => item % 3 === 0).map(item => item * 10)  // array
}
