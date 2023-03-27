const filterShortStateName = function (t) {
    const result = t.filter(word => word.length < 7)
    return result
}

const filterStartVowel = function (t) {
    const vowels = ["a", "e", "i", "o", "u"]
    const result = t.filter(word => vowels.includes(word[0].toLowerCase()))
    return result
}

// console.log(filterShortStateName(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))
// console.log(filterStartVowel(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))