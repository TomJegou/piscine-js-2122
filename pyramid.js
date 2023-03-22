function pyramid(str, num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 1; j <= i * 2 - 1; j++) {
            row += str;
        }
        let spaces = " ".repeat(num - i);
        let lineEnding = i === num ? "" : "\n";
        result += spaces + row.trimEnd() + spaces + lineEnding;
    }
    return result;
}