const sameAmount = function(string, regexp1, regexp2) {
    const c = regexp2.exec(str)
    const m = regexp1.exec(str)
    return c.length === m.length
}