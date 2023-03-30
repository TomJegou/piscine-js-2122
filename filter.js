const filter = (t, func) => {
    const result = []
    t.forEach((elem) => func(elem)? result.push(elem): elem)
    return result 
}

// console.log(filter([0, 1, 2, 3, 4, 5], (elem) => elem % 2 === 0))

