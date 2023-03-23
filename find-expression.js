const add4 = '+4'
const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    console.log(string)
    // console.log(string)
    if (n === number) {
        return string
    }
    return findExpression(number, `${string} ${add4}`, n + 4)
    return findExpression(number, `${string} ${mul2}`, n * 2)
}

console.log(findExpression(8))
console.log(findExpression(14))
