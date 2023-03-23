const letterSpaceNumber = function(str) {
    const regexp = new RegExp(`(\\D\\s(\\d))`, 'g')
    const result = []
    let m
    while ((m = regexp.exec(str)) !== null) {
        if (m.index === regexp.lastIndex) {
            regexp.lastIndex++
        }
        // result.push(m[0][0])
        console.log(m)
    }
    return result
}

console.log(letterSpaceNumber("example 1, example 20"))
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
console.log(letterSpaceNumber("It's 20 past 3"))