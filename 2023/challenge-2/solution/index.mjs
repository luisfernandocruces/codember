import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { interpretMessage } from "./interpret-message.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const message = await fs.readFile(
  path.join(__dirname, "../message-02.txt"),
  "utf8"
);
const result = interpretMessage(message);

console.log({ result });
