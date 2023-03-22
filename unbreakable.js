const split = function(str, pattern = '') {
    let word = ''
    const result = []
    if (pattern == '') {
        result.push(str)
        return result
    }
    for (let i = 0; i < str.length; i++) {
        let isPattern = true
        for (let j = i, c = 0; j < pattern.length, c < pattern.length; j++, c++) {
            if (str[j] != pattern[c] || j >= str.length) {
                isPattern = false
                break
            }
        }
        if (isPattern) {
            // if (word != '') {
            // }
            result.push(word)
            word = ''
            i+= pattern.length - 1
        } else {
            word += str[i]
        }
    }
    result.push(word)
    return result
}

const join = function(t, sep = ',') {
    let result = ''
    for (let i = 0; i < t.length; i++) {
        if (i === t.length -1) {
            result += t[i]
        } else {
            result += `${t[i]}${sep}`
        }
    }
    return result
}

// console.log(console.table(split("Je m'appelle Henri", " ")))
// console.log(join(split("Je m'appelle Henri", " ")))