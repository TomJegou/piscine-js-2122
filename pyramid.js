function pyramid(str, num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += " ".repeat((num - i)*str.length) + str.repeat(i * 2 - 1);
      if (i !== num) {
        result += "\n";
      }
    }
    return result;
}

// console.log(pyramid("a", 5));
// console.log(JSON.stringify(pyramid("a", 5)));
// console.log(pyramid('{}', 12));
// console.log(JSON.stringify(pyramid('{}', 12)));