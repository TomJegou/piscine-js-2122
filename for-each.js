const forEach = (t, func) => {
    for(let i = 0; i < t.length; i++) {
        t[i] = func(arguments, t[i])
    }
}

// const result = []
// forEach([1, 2, 3, 4, 5], (value) => result.push(value))
// console.log(result)