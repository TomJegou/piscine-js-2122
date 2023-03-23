const add4 = '+4'
const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    if (n === number) {
        return string
    }
    if (n + 4 === number) {
        return findExpression(number, `${string} +4`, n + 4)
    } else {
        return findExpression(number, `${string} *2`, n * 2)
    }
    return undefined
}

console.log(findExpression(8))
console.log(findExpression(14))
