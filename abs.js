const isPositive = function(n) {
    return n >= 0
}

const abs = function(n) {
    if(!isPositive(n)){
        return n*-1
    } else {
        return n
    }
}