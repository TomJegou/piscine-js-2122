const sameAmount = function(string, regexp1, regexp2) {
    let m = regexp1.exec(string)
    let m1 = regexp2.exec(string)
    if (m !== null && m1 !== null) {
        return true
    }
    return false
}

const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
console.log(sameAmount('hello how are you', /l/, /e/))
console.log(sameAmount(data, /h/, /w/))
console.log(sameAmount(data, /qqqq /, /qqqqqqq/))