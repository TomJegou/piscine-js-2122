const indexOf = function(t, value, starting = 0) {
    for(let i = 0; i < t.length; i++){
        if(t[starting + i] === value) {
            return i;
        }
    }
    return -1;
}

const lastIndexOf = function(t, value, starting = 0) {
    let x = null;
    for(let i = 0; i < t.length; i++){
        if(t[starting + i] === value) {
            x = i;
        }
    }
    if (x === null) {
        return -1
    }
    return x;
}

const includes = function(t, value, starting = 0) {
    for(let i = 0; i < t.length; i++){
        if(t[starting + i] === value) {
            return true;
        }
    }
    return false;
}

// const t = [1, 2, 3, 4];
// console.log(indexOf(t, 2, 3));