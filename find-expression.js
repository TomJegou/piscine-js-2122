// const add4 = '+4'
// const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    // console.log(string)
    if (n === number) {
        return string
    }
    if (n + 4 == number) {
        const t = `${string} ${add4}`
        n += 4
        return findExpression(number, t, n)
    } else {
        if (n * 2 <= number) {
            const t = `${string} ${mul2}`
            n *= 2
            return findExpression(number, t, n)
        } else {
            return undefined
        }
    }
}

// console.log(findExpression(8))