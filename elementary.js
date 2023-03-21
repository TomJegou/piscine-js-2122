const multiply = function(a, b) {
    let isPositiv = true;
    if (a === 0 || b === 0){
        return 0;
    }
    if (a < 0 || b < 0){
        isPositiv = false;
        if (a < 0 && b < 0){
            isPositiv = true;
            a = 0 - a;
            b = 0 - b;
        }
        if(a < 0){
            a = 0 - a;
        }
        if(b < 0){
            b = 0 - b;
        }
    }
    let result = a;
    let count = 1;
    while (count < b) {
        result = result + a;
        count = count + 1;
    }
    isPositiv ? result : result = 0 - result;
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
            a = 0 - a;
            b = 0 - b;
        }
        if(a < 0){
            a = 0 - a;
        }
        if(b < 0){
            b = 0 - b;
        }
    }
    let result = 0;
    while (a > b) {
        a = a - b;
        result = result + 1;
    }
    isPositiv ? result : result = 0 - result;
    return result;
}

const modulo = function(a, b) {
    while (a > b) {
        a = a - b;
    }
    return a;
}

console.log(divide(8, 34))