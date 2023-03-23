const sameAmount = function(string, regexp1, regexp2) {
    const c = regexp2.exec(string)
    const m = regexp1.exec(string)
    return c.match.length === m.match.length
}