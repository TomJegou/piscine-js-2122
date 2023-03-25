const citiesOnly = function(t){
    const result = []
    t.map((obj) => {
        result.push(obj.city)
    })
    return result
}

const upperCasingStates = function(t){
    t.map((city) =>{
        city[0].toUpperCase()
    })
}