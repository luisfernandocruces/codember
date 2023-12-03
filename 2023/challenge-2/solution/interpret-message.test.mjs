import { describe, it } from "node:test";
import { interpretMessage } from "./interpret-message.mjs";
import assert from "node:assert";

describe("Tests for interpretMessage function", () => {
  it("should decrypt the message correctly", () => {
    const input1 = "##*&";
    const expected1 = "4";

    const output1 = interpretMessage(input1);

    assert.strictEqual(output1, expected1);

    const input2 = "&##&*&@&";
    const expected2 = "0243";

    const output2 = interpretMessage(input2);

    assert.strictEqual(output2, expected2);
  });
});
