function compareArrays(arr1, arr2) {  
  // Ваш код
   return arr1.length === arr2.length && arr1.every((item,index) => item === arr2[index]);
  } // boolean

function advancedFilter(arr) {
  // Ваш код
  return arr.filter(item => (item > 0)).filter(item => item % 3 === 0).map(item => item * 10);  // array
}
