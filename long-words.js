const longWords = (t) => t.every((element) => element.length > 4);

const oneLongWord = (t) => t.some((element) => element.length > 9);

const noLongWords = (t) => t.every((element) => element.length < 7);