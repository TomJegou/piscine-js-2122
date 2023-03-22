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
            result.push(word)
            word = ''
            i+= pattern.length
        } else {
            word += str[i]
        }
    }
    result.push(word)
    return result
}

const join = function(t) {

}

console.log(console.table(split("dpsifjpdsifjdspifudsp< fpodsfpdsfk,slfsdkfposd", " ")))