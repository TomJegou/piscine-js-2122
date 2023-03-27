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
        let result = false;
        [...str].map(letter => {
            if(vowels.includes(letter.toLowerCase())) {
                return result = true;
            }
        })
        return result;
    }
    return t.filter(obj => obj.capital.length > 7 && !vowels.includes(obj.name[0].toLowerCase()) && check1Vowel(obj.tag) && obj.region !== "South");
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

console.log(multiFilter([
    { tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
    { tag: 'AK', name: 'Alaska', capital: 'Juneau', region: 'West' },
    { tag: 'AZ', name: 'Arizona', capital: 'Phoenix', region: 'West' },
    { tag: 'AR', name: 'Arkansas', capital: 'Little Rock', region: 'South' },
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'CO', name: 'Colorado', capital: 'Denver', region: 'West' },
    {
      tag: 'CT',
      name: 'Connecticut',
      capital: 'Hartford',
      region: 'Northeast',
    },
    { tag: 'DE', name: 'Delaware', capital: 'Dover', region: 'South' },
    {
      tag: 'DC',
      name: 'District Of Columbia',
      capital: 'Washington',
      region: 'South',
    },
    { tag: 'FL', name: 'Florida', capital: 'Tallahassee', region: 'South' },
    { tag: 'GA', name: 'Georgia', capital: 'Atlanta', region: 'South' },
    { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
    { tag: 'ID', name: 'Idaho', capital: 'Boise', region: 'West' },
    {
      tag: 'IL',
      name: 'Illinois',
      capital: 'Springfield',
      region: 'Midwest',
    },
    {
      tag: 'IN',
      name: 'Indiana',
      capital: 'Indianapolis',
      region: 'Midwest',
    },
    { tag: 'IA', name: 'Iowa', capital: 'Des Moines', region: 'Midwest' },
    { tag: 'KS', name: 'Kansas', capital: 'Topeka', region: 'Midwest' },
    { tag: 'KY', name: 'Kentucky', capital: 'Frankfort', region: 'South' },
    { tag: 'LA', name: 'Louisiana', capital: 'Baton Rouge', region: 'South' },
    { tag: 'ME', name: 'Maine', capital: 'Augusta', region: 'Northeast' },
    { tag: 'MD', name: 'Maryland', capital: 'Annapolis', region: 'South' },
    {
      tag: 'MA',
      name: 'Massachusetts',
      capital: 'Boston',
      region: 'Northeast',
    },
    { tag: 'MI', name: 'Michigan', capital: 'Lansing', region: 'Midwest' },
    { tag: 'MN', name: 'Minnesota', capital: 'St. Paul', region: 'Midwest' },
    { tag: 'MS', name: 'Mississippi', capital: 'Jackson', region: 'South' },
    {
      tag: 'MO',
      name: 'Missouri',
      capital: 'Jefferson City',
      region: 'Midwest',
    },
    { tag: 'MT', name: 'Montana', capital: 'Helena', region: 'West' },
    { tag: 'NE', name: 'Nebraska', capital: 'Lincoln', region: 'Midwest' },
    { tag: 'NV', name: 'Nevada', capital: 'Carson City', region: 'West' },
    {
      tag: 'NH',
      name: 'New Hampshire',
      capital: 'Concord',
      region: 'Northeast',
    },
    {
      tag: 'NJ',
      name: 'New Jersey',
      capital: 'Trenton',
      region: 'Northeast',
    },
    { tag: 'NM', name: 'New Mexico', capital: 'Santa Fe', region: 'West' },
    { tag: 'NY', name: 'New York', capital: 'Albany', region: 'Northeast' },
    {
      tag: 'NC',
      name: 'North Carolina',
      capital: 'Raleigh',
      region: 'South',
    },
    {
      tag: 'ND',
      name: 'North Dakota',
      capital: 'Bismarck',
      region: 'Midwest',
    },
    { tag: 'OH', name: 'Ohio', capital: 'Colombus', region: 'Midwest' },
    {
      tag: 'OK',
      name: 'Oklahoma',
      capital: 'Oklahoma City',
      region: 'South',
    },
    { tag: 'OR', name: 'Oregon', capital: 'Salem', region: 'West' },
    {
      tag: 'PA',
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      region: 'Northeast',
    },
    {
      tag: 'RI',
      name: 'Rhode Island',
      capital: 'Providence',
      region: 'Northeast',
    },
    {
      tag: 'SC',
      name: 'South Carolina',
      capital: 'Columbia',
      region: 'South',
    },
    { tag: 'SD', name: 'South Dakota', capital: 'Pierre', region: 'Midwest' },
    { tag: 'TN', name: 'Tennessee', capital: 'Nashville', region: 'South' },
    { tag: 'TX', name: 'Texas', capital: 'Austin', region: 'South' },
    { tag: 'UT', name: 'Utah', capital: 'Salt Lake City', region: 'West' },
    {
      tag: 'VT',
      name: 'Vermont',
      capital: 'Montpelier',
      region: 'Northeast',
    },
    { tag: 'VA', name: 'Virginia', capital: 'Richmond', region: 'South' },
    { tag: 'WA', name: 'Washington', capital: 'Olympia', region: 'West' },
    {
      tag: 'WV',
      name: 'West Virginia',
      capital: 'Charleston',
      region: 'South',
    },
    { tag: 'WI', name: 'Wisconsin', capital: 'Madison', region: 'Midwest' },
    { tag: 'WY', name: 'Wyoming', capital: 'Cheyenne', region: 'West' },
]))