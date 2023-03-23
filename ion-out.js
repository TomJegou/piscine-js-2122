const ionOut = function(string){
    const regex = /(\w+t)(?=ion)/g
    let found =  string.match(regex)
    return found === null ? found = [] : found = found
}

// console.log(ionOut('attention, direction'))
// console.log(ionOut('promotion, provision'))
// console.log(ionOut('transfusion'))
// console.log(ionOut(' 1st position is the vision of the 2nd position'))