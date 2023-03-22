const chunk = function(t, n) {
    const result = []
    let subArr = []
    t.map((value) => {
        if( subArr.length === n) {
            result.push(subArr)
            subArr = [value]
        } else {
            subArr.push(value)
        }
    })
    result.push(subArr)
    return result
}

console.log(chunk([1, 2, 3, 5], 3))