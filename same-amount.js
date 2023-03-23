const sameAmount = function(string, regexp1, regexp2) {
    return regexp2.exec(string).length === regexp1.exec(string).length
}

// console.log(sameAmount('hello how are you', /l/, /e/))