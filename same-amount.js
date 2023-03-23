const sameAmount = function(string, regexp1, regexp2) {
    regexp1 = new RegExp(regexp1, "g")
    regexp2 = new RegExp(regexp2, "g")
    const found1 = string.match(regexp1)
    const found2 = string.match(regexp2)
    if (found1 !== null && found2 !== null) {
        return found1.length ==  found2.length
    } else {
        return false
    }
}

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// console.log(sameAmount('hello how are you', /l/, /e/))
// console.log(sameAmount(data, /h/, /w/))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
// console.log(sameAmount(data, /q /, /qqqqqqq/))