const addWeek = function (date) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "secondSunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday"
    ]
    return days[date.getDate()]
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