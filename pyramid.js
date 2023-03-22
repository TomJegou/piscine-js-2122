function pyramid(str, num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += " ".repeat(num - i) + str.repeat(i * 2 - 1) + " ".repeat(num - i);
      if (i !== num) {
        result += "\n";
      }
    }
    return result;
  }