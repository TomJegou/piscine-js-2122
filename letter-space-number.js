const letterSpaceNumber = function(str) {
    const regexp = new RegExp('(\\D\\s\\d\\D)', 'g')
    result = []
    while ((m = regexp.exec(str)) !== null) {
        if (m.index === regexp.lastIndex) {
            regexp.lastIndex++
        }
        result.push(m[0].slice(0,-1))
    }
    return result
}

// console.log(letterSpaceNumber("example 1, example 20"))