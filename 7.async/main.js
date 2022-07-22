function speDecor(func) {
    function wrapper(...args) {
        wrapper.history.push(args)
        return func(...args)
    }
    wrapper.history = []
    return wrapper;
}

let sum = (a, b) => a + b

let spy = speDecor(sum)
spy(6,10)