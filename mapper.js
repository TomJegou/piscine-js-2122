const map = function(t, f) {
    const result = []
    for(let i = 0; i < t.length; i++) {
        result.push(f(t[i], i, t))
    }
    return result
}

const flatMap = function(t, f) {
    const flat = function(t, depth = 1) {
        if(depth === 0) {
            return t
        }
        let t2 = []
        let z = false
        map(t, (value) => {
            if (value !== undefined) {
                if (Array.isArray(value)) {
                    z = true
                    t2 = t2.concat(value)
                } else {
                    t2.push(value)
                }
            }
        })
        if (z) {
            depth--
            return flat(t2, depth)
        } else {
            return t2
        }
    }
    let result = map(t, f)
    result = flat(t, 1)
    return result
}