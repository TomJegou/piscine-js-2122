// const add4 = '+4'
// const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    // console.log(string)
    if (n === number) {
        return string
    }
    if (n + 4 == number) {
        const t = `${string} ${add4}`
        const z = n + 4
        return findExpression(number, t, z)
    }
    const x = `${string} ${mul2}`
    const y = n * 2
    return findExpression(number, x, y)
}

// console.log(findExpression(8))