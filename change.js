// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }

const get = (key) => {
    return sourceObject[key];
}

const set = (key, value) => {
    sourceObject[key] = value;
}
// console.log({sourceObject});
// console.log(set('num', 55));
// console.log({sourceObject});