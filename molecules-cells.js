const RNA = function(str) {
    const dic = {
        "G" : "C",
        "C" : "G",
        "T" : "A",
        "A" : "U"
    }
    let result = ''
    for(const t of str) {
        result += dic[t.toUpperCase()]
    }
    return result
}

const DNA = function(str) {
    const dic = {
        "C" : "G",
        "G" : "C",
        "A" : "T",
        "U" : "A"
    }
    let result = ''
    for(const t of str) {
        result += dic[t.toUpperCase()]
    }
    return result
}