const filterShortStateName = function (t) {
    const result = t.filter(word => word.length < 7);
    return result;
}

const filterStartVowel = function (t) {
    const vowels = ["a", "e", "i", "o", "u"];
    const result = t.filter(word => vowels.includes(word[0].toLowerCase()));
    return result;
}

const filter5Vowels = function (t) {
    const vowels = ["a", "e", "i", "o", "u"];
    const chekc5Vowels = function (word) {
        let v = '' ;
        [...word].map((letter) => {
            if (vowels.includes(letter.toLowerCase())) {
                v += letter;
            }
        })
        return v.length > 4;
    }
    const result = t.filter(word => chekc5Vowels(word));
    return result;
}

const filter1DistinctVowel = function (t) {

}

const multiFilter = function (t) {

}

// console.log(filterShortStateName(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))
// console.log(filterStartVowel(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))
console.log(filter5Vowels(["Tom", "Alaska", "California", "West Virginia"]))