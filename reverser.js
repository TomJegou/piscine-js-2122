const reverse = function(t) {
    const result = []
    for(let i = t.length-1; i >= 0; i--) {
        result.push(t[i])
    }
    if (typeof t == "string") {
        return result.join('')
    } 
    return result
}