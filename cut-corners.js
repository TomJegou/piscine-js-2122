const round = function(n) {
    let x = 0;
    let y = 0;
    let result = 0;
    if (n > 0) {
        for (let i = 0; i < n; i++){
            x = i;
        }
        y = x + 1
        y - n > 0.5 ? result = x : result = y
    } else {
        for (let i = 0; i > n; i--){
            x = i;
        }
        y = x - 1
        y - n < -0.5 ? result = x : result = y
    }
    return result
}

const ceil = function(n) {
    
}

const floor = function(n) {
    
}

const trunc = function(n) {
    
}