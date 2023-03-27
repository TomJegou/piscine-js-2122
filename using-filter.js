const filterShortStateName = function (t) {
    const result = t.filter(word => word.length < 7)
    return result
}

console.log(filterShortStateName(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))