const first = function(t) {
    return t[0]
}

const last = function(t) {
    return t[t.length-1]
}

const kiss = function(t) {
    if (first(t) < last(t)) {
        return [first(t), last(t)]
    } else {
        return [last(t), first(t)]
    }
}