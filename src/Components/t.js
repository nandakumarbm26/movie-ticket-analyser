function predict(str1) {
  let str = str1;
  let count = 0;
  let start = 0;
  let end = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] === "$") {
      return 0;
    }
    count = 0;
    start = i;
    while (str[i] !== " ") {
      count++;
      i++;
    }
    while (str[i] === " ") {
      count++;
      i++;
    }
    end = i;
    console.log(start + " " + end);
    if (i === str.length) {
      break;
    }
  }
  //   console.log(data);
  //   return data;
}
predict("11      11      1   1            1 1   1$");
