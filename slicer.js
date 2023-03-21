const slice = function(t, starting, ending = t.length) {
    const result = [];
    for(let i = starting; i < ending; i++) {
        result.push(t[i]);
    }
    return result;
}

console.log(slice('abcdef', 2));