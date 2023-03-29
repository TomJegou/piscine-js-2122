const adder = (t, initiator = 0) => t.reduce((accumulator, currentValue) => accumulator + currentValue, initiator);

const sumOrMul = (t, initiator = 0) => t.reduce((accumulator, currentValue) => currentValue % 2 == 0 ? accumulator * currentValue : accumulator + currentValue, initiator);

const funcExec = (t, param) => t.reduce(function(accumulator, currentValue){currentValue(accumulator, param)});

// console.log(adder([1, 2, 3, 4]))
// console.log(adder([9, 24, 7, 11, 3], 10))
// console.log(sumOrMul([29, 23, 3, 2, 25]))
// console.log(sumOrMul([18, 17, 7, 13, 25], 12))s