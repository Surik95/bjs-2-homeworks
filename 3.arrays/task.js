function compareArrays(arr1, arr2) {
  let result;
  
  // Ваш код
  arr1.every((item,index) => arr1.length === arr2.length && arr1[index] === arr2[index] ) ? result = true : result = false;
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(item => (item > 0)).filter(item => item % 3 === 0).map(item => item * 10) 
  return resultArr; // array
}
