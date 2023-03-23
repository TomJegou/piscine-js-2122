const add4 = '+4'
const mul2 = '*2'

const findExpression = function(number, string = '1', n = 1) {
    if (n === number) {
        return string
    } else if (n > number) {
        return undefined
    } else if (number === 4) {
        return `${string} +4`
    } else if (number === 2) {
        return `${string} *2`
    }
    const a = findExpression(number, `${string} +4`, n+4)
    const b = findExpression(number, `${string} *2`, n*2)
    if (a !== undefined) {
        return a
    }
    return b
}

// console.log(findExpression(8))
// console.log(findExpression(14))
// console.log(findExpression(2))
// console.log(findExpression(60) !== undefined)
// console.log(findExpression(100) !== undefined)
// console.log(findExpression(280) !== undefined )
// console.log(findExpression(110)!== undefined )
// console.log(findExpression(144)!== undefined )
// console.log(findExpression(200)!== undefined )
// console.log(findExpression(104) !== undefined)
// console.log(findExpression(7))
// console.log(findExpression(63))
// console.log(findExpression(23))
// console.log(findExpression(103))