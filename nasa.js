const nasa = function(n, result = '', start = 1) {
    if(start == n + 1) {
        return result
    }
    if(start % 3 === 0 && start % 5 === 0) {
        result += "NASA"
    } else if (start % 3 === 0) {
        result += "NA"
    } else if (start % 5 === 0) {
        result += "SA"
    } else {
        result += start
    }
    if (start != n){
        result += " "
    }
    start++
    return nasa(n, result, start)
}

// console.log(nasa(10))