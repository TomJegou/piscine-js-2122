function pyramid(str, num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      let row = "";
      for (let j = 1; j <= i * 2 - 1; j++) {
        row += str;
      }
      let spaces = " ".repeat(num - i);
      result += spaces + row.trimEnd() + spaces;
      if (i !== num) {
        result += "\n";
      }
    }
    return result;
}