const flat = function(t, depth = 1) {
    if(depth === 0) {
        return t
    }
    let t2 = []
    let z = false
    t.map((value) => {
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

// const arr1 = [0, [1, 2], [[[3, 4]]]]
// console.log(flat(arr1, Infinity))