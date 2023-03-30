const forEach = (t, func) => {
    for(let i = 0; i < t.length; i++) {
        t[i] = func(t[i])
    }
}