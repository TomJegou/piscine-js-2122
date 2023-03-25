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
        result.push(city[0].toUpperCase() + city.slice(1))
    })
    return result
}

const fahrenheitToCelsius = function(t) {
    const result = []
    t.map((tmpF) =>{
        const v = tmpF.split("°")
        result.push(`${Math.round((parseInt(v[0])-32) / 1.8)}°C`)
    })
    return result
}

const trimTemp = function (t) {

}

const tempForecasts = function() {

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

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))