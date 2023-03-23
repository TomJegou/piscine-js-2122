const ionOut = function(string){
    const regex = /(\w+t)(?=ion)/g
    return string.match(regex)
}