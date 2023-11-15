export const countWords = (message) => {
  const words = message.split(" ");

  const map = new Map();

  words.forEach((word) => {
    const normalizedWord = word.toLowerCase();

    const count = map.get(normalizedWord) ?? 0;
    map.set(normalizedWord, count + 1);
  });

  let result = "";

  for (const [key, value] of map) {
    result += `${key}${value}`;
  }

  return result;
};
