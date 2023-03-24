const addWeek = function (date) {
    const source = new Date('0001-01-01').getTime()/1000/3600/24 - 1
    const days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    }
    if ((date.getTime()/1000/3600/24-source)%14 > 7){
        return `second${days[date.getUTCDay()]}`
    }
    return days[date.getUTCDay()]
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

// // console.log(timeTravel({
// //     date: new Date('2020-05-29 23:25:22'),
// //     hour: 21,
// //     minute: 22,
// //     second: 22,
// //   }).toString())

// console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('2025-08-11')))
// console.log(addWeek(new Date('0001-01-07')))
// console.log(addWeek(new Date('0001-01-14')))

// console.log(new Date('0001-01-07').getUTCDay())
// console.log(new Date('0001-01-14').getUTCDay())
const source = new Date('0001-01-01').getTime()/1000/3600/24-1
console.log((new Date('0001-01-01').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-02').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-03').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-04').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-05').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-06').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-07').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-08').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-09').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-10').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-11').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-12').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-13').getTime()/1000/3600/24-source)%14)
console.log((new Date('0001-01-14').getTime()/1000/3600/24-source)%14)
// console.log(new Date('2001-11-12').getTime()/1000/3600/24)