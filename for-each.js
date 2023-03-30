const forEach = (t, func) => {
    for(let i = 0; i < t.length; i++) {
        console.log(t[i])
        func(t[i])
    }
    return t
}