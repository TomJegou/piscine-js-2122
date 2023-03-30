function forEach (t, func) {
    console.log(func)
    for(let i = 0; i < t.length; i++) {
        t[i] = func(t[i], i, t)
    }
}

// const result = []
// forEach([1, 2, 3, 4, 5, 6], (value) => result.push(value))
// console.log(result)