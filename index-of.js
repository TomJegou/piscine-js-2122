const indexOf = function(t, value, starting = 0) {
    for(let i = 0; i < t.length; i++){
        if (i >= starting) {
            if(t[i] === value) {
                return i;
            }
        }
    }
    return -1;
}

const lastIndexOf = function(t, value, starting = 0) {
    let x = null;
    for(let i = 0; i < t.length; i++){
        if(i >= starting) {
            if(t[i] === value) {
                x = i;
            }
        }
    }
    if (x === null) {
        return -1
    }
    return x;
}

const includes = function(t, value, starting = 0) {
    for(let i = 0; i < t.length; i++){
        if(i >= starting) {
            if(t[i] === value) {
                return true;
            }
        }
    }
    return false;
}

// const t = [1, 2, 3, 4];
// console.log(indexOf(t, 2, 3));
// const t = 3;
// console.log(lastIndexOf([0, 0, t, t], t, 3));
// console.log(indexOf([t, 0, 0, t], t, 1));
// console.log(lastIndexOf([t, 0, 0, t], t, 2));
// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));