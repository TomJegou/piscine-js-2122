const multiply = function(a, b) {
    let isPositiv = true;
    if (a === 0 || b === 0){
        return 0;
    }
    if (a < 0 || b < 0){
        isPositiv = false;
        if (a < 0 && b < 0){
            isPositiv = true;
            a = a*-1;
            b = b*-1;
        }
        if(a < 0){
            a = a *-1;
        }
        if(b < 0){
            b = b *-1;
        }
    }
    let result = a;
    let count = 1;
    while (count < b) {
        result = result + a;
        count = count + 1;
    }
    isPositiv ? result : result*-1;
    return result
}

const divide = function(a, b) {
    let isPositiv = true;
    if (b === 0){
        return Infinity;
    }
    if (a === 0) {
        return 0
    }
    if (a < 0 || b < 0){
        isPositiv = false;
        if (a < 0 && b < 0){
            isPositiv = true;
            a = a*-1;
            b = b*-1;
        }
        if(a < 0){
            a = a *-1;
        }
        if(b < 0){
            b = b *-1;
        }
    }
    let result = 0;
    while (a > 0) {
        a = a - b;
        result = result + 1;
    }
    isPositiv ? result : result*-1;
    return result;
}

const modulo = function(a, b) {
    while (a > 0) {
        a = a - b;
    }
    return a;
}

console.log(divide(21, 2))