import * as fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { countWords } from "./count_words.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const message = await fs.readFile(
  path.join(__dirname, "../message_01.txt"),
  "utf8"
);
const count = countWords(message);

console.log({ count });
