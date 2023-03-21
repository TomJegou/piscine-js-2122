const slice = function(t, starting, ending = t.length) {
    const result = [];
    if (ending < 0) {
        ending = ending + t.length;
    }
    if (starting >= 0) {
        for(let i = starting; i < ending; i++) {
            result.push(t[i]);
        }
    } else {
        for(let i = 0; i >= starting; i--) {
            result.push(t[ending - i*-1]);
        }
        result.reverse();
    }
    if (typeof t == "string") {
        return result.join('')
    } 
    return result;
}

// console.log(slice('abcdef', 2)); // 'cdef'
// console.log(slice('abcdef', -2)); // 'ef'
// console.log(slice('abcdef', 0, 2)); // 'ab'
// console.log(slice('abcdef', 0, -2)); // 'abcd'