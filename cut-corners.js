const round = function(n) {
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
    result = 0;
    if (n > 0) {
        for (let i = 0; i <= n; i++) {
            if(i === n){
                return i;
            }
            result = i;
        }
        result++;
    } else {
        for (let i = 0; i > n; i--) {
            if(i === n) {
                return i;
            }
            result = i;
        }
    }
    return result;
}

const floor = function(n) {
    result = 0;
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
    let result = 0
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            result = i
        }
        return result
    } else {
        for (let i = 0; i > n; i--) {
            result = i
        }
        return result
    }
}

console.log(trunc(13.37))
console.log(trunc(42.84))
console.log(trunc(0.123))
console.log(trunc(-0.123))
console.log(trunc(0.123))