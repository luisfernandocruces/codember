import { describe, test } from "node:test";
import assert from "node:assert";
import { countWords } from "./count_words.mjs";

describe("Tests for count function", () => {
  test("Case 1", () => {
    const message = "cat dog dog car Cat doG sun";
    const expectedResult = "cat2dog3car1sun1";

    const result = countWords(message);

    assert.strictEqual(result, expectedResult);
  });

  test("Case 2", () => {
    const message = "cup te a cup";
    const expectedResult = "cup2te1a1";

    const result = countWords(message);

    assert.strictEqual(result, expectedResult);
  });

  test("Case 3", () => {
    const message = "houses house housess";
    const expectedResult = "houses1house1housess1";

    const result = countWords(message);

    assert.strictEqual(result, expectedResult);
  });
});
