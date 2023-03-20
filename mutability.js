const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

clone1 = {...person};
clone2 = {...person};
samePerson = person;
person.age++;
person.country = "FR";