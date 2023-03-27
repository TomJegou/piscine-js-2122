const vowels = ["a", "e", "i", "o", "u"];

const filterShortStateName = (t) => t.filter(word => word.length < 7);

const filterStartVowel = (t) => t.filter(word => vowels.includes(word[0].toLowerCase()));

const filter5Vowels = function (t) {
    const chekc5Vowels = function (word) {
        let v = '' ;
        [...word].map((letter) => {
            if (vowels.includes(letter.toLowerCase())) {
                v += letter;
            }
        })
        return v.length > 4;
    }
    return t.filter(word => chekc5Vowels(word));
}

const filter1DistinctVowel = function (t) {
    const check1DistinctVowels = function (word) {
        const v = [];
        [...word].map(letter => {
            if (vowels.includes(letter.toLowerCase())) {
                v.push(letter);
            }
        })
        let c = true
        v.map(letter => {
            if(letter.toLowerCase() !== v[0].toLowerCase()) {
                c = false;
            }
        })
        return c;
    }
    return t.filter(word => check1DistinctVowels(word));
}

const multiFilter = function (t) {
    const check1Vowel = function(str) {
        [...str].map(letter => {
            if(vowels.includes(letter.toLowerCase())) {
                return true
            }
            return false
        })
    }
    return t.filter(obj => obj.capital.length > 7 && !vowels.includes(obj.name[0].toLowerCase()) && check1Vowel(obj.tag) && obj.region === "South")
}

// console.log(filterShortStateName(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))
// console.log(filterStartVowel(["iqofhdsoif", "tom", "alsaka", "pifhdspfdsjfpds"]))
// console.log(filter5Vowels(["Tom", "Alaska", "California", "West Virginia"]))

// console.log(filter1DistinctVowel([
//     'Alabama',
//     'Alaska',
//     'Arizona',
//     'Arkansas',
//     'California',
//     'Colorado',
//     'Connecticut',
//     'Delaware',
//     'Florida',
//     'Georgia',
//     'Hawaii',
//     'Idaho',
//     'Illinois',
//     'Indiana',
//     'Iowa',
//     'Kansas',
//     'Kentucky',
//     'Louisiana',
//     'Maine',
//     'Maryland',
//     'Massachusetts',
//     'Michigan',
//     'Minnesota',
//     'Mississippi',
//     'Missouri',
//     'Montana',
//     'Nebraska',
//     'Nevada',
//     'New Hampshire',
//     'New Jersey',
//     'New Mexico',
//     'New York',
//     'North Carolina',
//     'North Dakota',
//     'Ohio',
//     'Oklahoma',
//     'Oregon',
//     'Pennsylvania',
//     'Rhode Island',
//     'South Carolina',
//     'South Dakota',
//     'Tennessee',
//     'Texas',
//     'Utah',
//     'Vermont',
//     'Virginia',
//     'Washington',
//     'West Virginia',
//     'Wisconsin',
//     'Wyoming',
//   ]))