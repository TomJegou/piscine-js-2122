const vowels = new RegExp("(A|a|e|E|i|I|o|O|u|U)", "g")


const vowelDots = function(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (vowels.exec(str[i]) !== null) {
            result += str[i] + "."
        } else {
            result += str[i]
        }
    }
    return result
}

// console.log(vowelDots("Je m'appele tom"))