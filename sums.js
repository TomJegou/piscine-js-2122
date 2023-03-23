const sum = function(n) {
    const result = []
    let t = []
    for (let i = 0; i < n; i++) {
        t.push(1)
    }
    result.push(t)
    return result
}

console.log(sum(4))