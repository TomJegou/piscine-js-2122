const add4 = '+4'
const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    if (n === number) {
        return string
    }
    const t = `${string} ${add4}`
    const z = n + 4
    findExpression(number, t, z)
    const x = `${string} ${mul2}`
    const y = n * 2
    findExpression(number, x, y)
}

console.log(findExpression(8))