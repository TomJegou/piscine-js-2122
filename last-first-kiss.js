const first = function(t) {
    return t[0]
}

const last = function(t) {
    return t[t.length-1]
}

const kiss = function(t) {
    return [last(t), first(t)]
}