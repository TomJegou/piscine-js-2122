const isValid = function(date) {
    try {
        date.valueOf()
        console.log("Valid date")
        return true
    } catch {
        return false
    }
}

const isAfter = function(date1, date2){
    return date1.getTime() > date2.getTime()
}

const isBefore = function(date1, date2) {
    return isAfter(date2, date1)
}

const isFuture = function(date) {
    return isValid(date) && date.getTime() > new Date().getTime()
}

const isPast = function(date) {
    return isValid(date) && date.getTime() < new Date().getTime()
}

// const d = new Date(NaN)
// const a = new Date()
// console.log(typeof d.getTime())
// console.log(typeof a.getTime())
// console.log(isValid(new Date()))
// console.log(isValid(d))
// console.log(isValid("fsdfsd"))