const addWeek = function (date) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    if (date.getDate() > 7){
        return `second${days[date.getDay() -1]}`
    }
    return days[date.getDate() -1]
}

const timeTravel = function({ date, hour, minute, second }) {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}

// console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('0001-01-02')))
// console.log(addWeek(new Date('0001-01-08')))

// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString())

// console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('2025-08-11')))
// console.log(addWeek(new Date('0001-01-07')))