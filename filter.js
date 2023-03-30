const filter = (t, func) => {
    const result = []
    t.forEach((elem, index, t) => func(elem, index, t)? result.push(elem): elem)
    return result
}

const reject = (t, func) => {
    const result = []
    t.forEach((elem, index, t) => !func(elem, index, t)? result.push(elem): elem)
    return result
}

const partition = (t, func) => {
    return [filter(t,func), reject(t,func)]
} 

