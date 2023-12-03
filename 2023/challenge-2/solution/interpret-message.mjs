export const interpretMessage = (message) => {
  const symbols = message.split("");
  let counter = 0;
  let allPrinted = "";

  for (const symbol of symbols) {
    if (symbol === "#") {
      counter += 1;
    } else if (symbol === "@") {
      counter -= 1;
    } else if (symbol === "*") {
      counter *= counter;
    } else if (symbol === "&") {
      allPrinted += `${counter}`;
    }
  }
  return allPrinted;
};
