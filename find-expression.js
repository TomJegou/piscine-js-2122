// const add4 = '+4'
// const mul2 = '*2'

const findExpression = function(number, string = '1') {
    // console.log(string)
    if (number === 0) {
        return string
    }
    if (number - 4 == 0) {
        const t = `${string} ${add4}`
        number -= 4
        return findExpression(number, t)
    } else {
        if (number %2 == 0) {
            const x = `${string} ${mul2}`
            number /= 2
            return findExpression(number, x)
        } else {
            return undefined
        }
    }
}