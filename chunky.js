const chunk = function(t, n) {
    const result = []
    let subArr = []
    t.map((value) => {
        if( subArr.length % n == 0) {
            result.push(subArr)
            subArr = []
        } else {
            subArr.push(value)
        }
    })
    return result
}

console.log(chunk([1, 2, 3, 5], 2))