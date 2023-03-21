const multiply = function(a, b) {
    if (a === 0 && b === 0){
        return 0
    }
    let result = a;
    let count = 1;
    while (count < b) {
        result = result + a;
        count = count + 1;
    }
    return result;
}

const divide = function(a, b) {
    let result = 0;
    while (a > 0) {
        a = a - b;
        result = result + 1;
    }
    return result;
}

const modulo = function(a, b) {
    while (a > 0) {
        a = a - b;
    }
    return a;
}