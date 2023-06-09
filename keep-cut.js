const cutFirst = function(str) {
    return str.slice(2);
}

const cutLast  = function(str) {
    return str.slice(0, -2)
}

const cutFirstLast = function(str) {
    str = cutFirst(str)
    return cutLast(str)
}

const keepFirst  = function(str) {
    return str.slice(0, 2)
}

const keepLast  = function(str) {
    return str.slice(-2)
}

const keepFirstLast  = function(str) {
    return keepFirst(str) + keepLast(cutFirst(str))
}

// console.log(cutFirst("testan"));
// console.log(cutLast("testab"));
// console.log(keepFirst("testab"));
// console.log(keepLast("testab"));
// console.log(keepFirstLast('abcdef') === 'abef');
// console.log(keepFirstLast('af'))
// console.log(keepFirstLast('af') === 'af')