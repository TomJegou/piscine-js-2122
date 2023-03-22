const round = function(n) {
    if (n === Infinity || n === -Infinity || n >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER || n > 1000) {
        return n
    }
    let x = 0;
    let y = 0;
    let result = 0;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            x = i;
        }
        y = x + 1;
        y - n > 0.5 ? result = x : result = y;
    } else {
        for (let i = 0; i > n; i--) {
            x = i;
        }
        y = x - 1;
        y - n < -0.5 ? result = x : result = y;
    }
    return result;
}

const ceil = function(n) {
    if (n === Infinity || n === -Infinity || n >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER || n > 1000) {
        return n
    }
    let result = 0;
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if(i === n){
                return i;
            }
            result = i;
        }
        result++;
    } else {
        for (let i = 0; i >= n; i--) {
            if(i === n) {
                return i;
            }
            result = i;
        }
    }
    return result;
}

const floor = function(n) {
    if (n === Infinity || n === -Infinity || n >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER || n > 1000) {
        return n
    }
    let result = 0;
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if (i === n) {
                return i
            }
            result = i
        }
    } else {
        for (let i = 0; i >= n; i--) {
            if (i === n) {
                return i
            }
            result = i
        }
        result--
    }
    return result
}

const trunc = function(n) {
    return ~~n
}

// const testingvalue = -2147483648;
// console.log(round(testingvalue))
// console.log(ceil(testingvalue))
// console.log(floor(testingvalue))
// console.log(trunc(testingvalue))