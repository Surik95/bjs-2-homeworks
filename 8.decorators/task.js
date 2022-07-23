function cachingDecoratorNew(func) {
  // Ваш код
  function wrapper(...args){
    const hash = args.join(',');
    let result = wrapper.cache.find(item => item.hash === hash);
    if (result !== undefined) {
      console.log(`Из кэша: ${result['value']}`)
      return `Из кэша: ${result['value']}`;
    }

    result = func(...args);
    wrapper.cache.push({hash: hash, value: result})
    if (wrapper.cache.length > 5) {
      let deleteItems = wrapper.cache.shift();
    }
    console.log(`Вычисляем: ${result}`)
    return `Вычисляем: ${result}`;
  }

  wrapper.cache = [];
  return wrapper
}


function debounceDecoratorNew(func, delay) {
  // Ваш код
  
  let flug = null;
  let timeId = null;
  let timeStart = performance.now();
  let timeCall;
  let timePreviousCall = 0
  
  return function (...args){
    timeCall = Math.floor(performance.now() - timeStart)
    if (flug === null) {
    console.log(func())
    flug = false  
    timeId = setTimeout(() => flug = true, 2000)
    } else if (!flug) {
      if (timePreviousCall < 99) {
        timePreviousCall = 0
        console.log(`проигнорировано так как от последнего вызова прошло менее 2000мс (${timeCall} - ${timePreviousCall} < 2000)`)
      } else {
      console.log(`проигнорировано так как от последнего вызова прошло ${timeCall}-${timePreviousCall}=${timeCall - timePreviousCall} (${timeCall - timePreviousCall} < 2000)`)
      clearTimeout(timeId);
      timeId = setTimeout(() => flug = true, 2000)
      }
    }
    else if (flug) {
    setTimeout(() => console.log(func(...args)), delay)
    }
    timePreviousCall = timeCall
  }
}

function debounceDecorator2(func) {
  // Ваш код
  let flug = null;
  let timeId = null;
  let timeStart = performance.now();
  let timeCall;
  let timePreviousCall = 0
  
  function wrapper(...args){
    timeCall = Math.floor(performance.now() - timeStart)
    if (flug === null) {
    console.log(func())
    flug = false  
    timeId = setTimeout(() => flug = true, 2000)
    } else if (!flug) {
      if (timePreviousCall < 99) {
        timePreviousCall = 0
        console.log(`проигнорировано так как от последнего вызова прошло менее 2000мс (${timeCall} - ${timePreviousCall} < 2000)`)
      } else {
      console.log(`проигнорировано так как от последнего вызова прошло ${timeCall}-${timePreviousCall}=${timeCall - timePreviousCall} (${timeCall - timePreviousCall} < 2000)`)
      clearTimeout(timeId);
      timeId = setTimeout(() => flug = true, 2000)
      }
    }
    else if (flug) {
    setTimeout(() => console.log(func(...args)), delay)
    }
    timePreviousCall = timeCall
    wrapper.count += 1
  }
  wrapper.count = 0
  return wrapper
}
