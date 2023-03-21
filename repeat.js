const repeat = function(str, nbr){
    if (nbr >= 0) {
        let result = ""
        let count = 0
        while (count < nbr) {
            result = result + str
            count = count + 1
        }
        return result
    }
}