const triangle = function(str, depth) {
    let result = ''
    for(let i = 1; i <= depth; i++) {
        for (let j = 0; j < i; j++) {
            result += str
        }
        if (i != depth){
            result += '\n'
        }
    }
    return result
}

// console.log(triangle("*", 5))