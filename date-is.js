const isValid = function(date) {
    try {
        return !isNaN(new Date(date).getTime()) && typeof date !== "string"
    } catch {
        return false
    }
}

const isAfter = function(date1, date2){
    if (isValid(date1) && isValid(date2)) {
        return new Date(date1).getTime() > new Date(date2).getTime()
    } else {
        return false
    }
}

const isBefore = function(date1, date2) {
    return isAfter(date2, date1)
}

const isFuture = function(date) {
    return isAfter(date, Date.now())
}

const isPast = function(date) {
    return isValid(date) && !isFuture(date)
}

// const d = new Date(NaN)
// const a = new Date()
// // console.log(isNaN(d.valueOf()))
// console.log(isValid(new Date()))
// // console.log(isValid(d))
// console.log(isValid(""))
// // console.log(isValid(new Date('December 17, 1995 03:24:00')))
// // console.log(isValid('2013-01-01'))
// // console.log(Date.now())
// console.log(isValid(Date.now()))
// console.log(isValid('2013-01-01'))