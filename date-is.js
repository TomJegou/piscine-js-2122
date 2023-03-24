const isValid = function(date) {
    return date.valueOf() === NaN
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