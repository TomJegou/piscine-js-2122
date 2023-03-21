const slice = function(t, starting, ending = t.length) {
    const result = [];
    if (ending < 0) {
        ending = ending + t.length;
    }
    if (starting < 0) {
        starting = starting + t.length
    }
    for(let i = starting; i < ending; i++) {
        result.push(t[i]);
    }
    if (typeof t == "string") {
        return result.join('')
    } 
    return result;
}

console.log(slice('abcdef', 2)); // 'cdef'
console.log(slice('abcdef', -2)); // 'ef'
console.log(slice('abcdef', 0, 2)); // 'ab'
console.log(slice('abcdef', 0, -2)); // 'abcd'
console.log(slice('abcdef', -3, -1)) // 'de'