const map = function(t, f) {
    const result = []
    for(let i = 0; i < t.length; i++) {
        result.push(f(t[i], i, t))
    }
    return result
}

const flatMap = function(t, f) {
    const v = map(t, f)
    const result = []
    v.forEach((elem) => Array.isArray(elem) ? elem.forEach((e) => result.push(e)): result.push(elem))
    return result
}

console.log(flatMap([1, 2, 3], (n) => [n, n]))