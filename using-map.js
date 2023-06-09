const citiesOnly = function(t){
    const result = []
    t.map((obj) => {
        result.push(obj.city)
    })
    return result
}

const upperCasingStates = function(t){
    const result = [] 
    t.map((city) =>{
        let str = ""
        const tmp = city.split(" ")
        tmp.map((word, index) =>{
            str += word[0].toUpperCase() + word.slice(1)
            if (index !==  tmp.length -1) {
                str += " "
            }
        })
        result.push(str)
    })
    return result
}

const fahrenheitToCelsius = function(t) {
    const result = []
    t.map((tmpF) =>{
        const v = tmpF.split("°")
        result.push(`${Math.floor((parseInt(v[0])-32) / 1.8)}°C`)
    })
    return result
}

const trimTemp = function (t) {
    t.map((obj) => {
        obj.temperature = obj.temperature.split(" ").join('')
    })
    return t
}

const tempForecasts = function(t) {
    const result = []
    t.map((obj, index) => {
        result.push(`${fahrenheitToCelsius([trimTemp(t)[index].temperature])[0]}elsius in ${citiesOnly(t)[index]}, ${upperCasingStates([obj.state])}`)
    })
    return result
}

// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]))

// console.log(upperCasingStates(['alabama', 'new jersey']))

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F', '-2°F']))

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))

// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]))