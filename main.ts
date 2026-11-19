// main.ts — entrypoint for the gta6-meme-x-01 bounty.
//
// What this program does, nothing more:
//   1. Read POST.json from the repository root.
//   2. Check it is a JSON object with a `url` string that names an X post
//      (https://x.com/<handle>/status/<id>, twitter.com accepted too).
//   3. Copy those exact bytes to <output>/POST.json.
//
// No network, no clock, no files outside the repository. Two runs write
// the same bytes: the copy is byte-for-byte and the output name is fixed.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const MAX_POST_BYTES = 16384;

// An X post address: x.com or twitter.com, optional www./mobile. prefix,
// then <handle>/status/<digits> (or /i/web/status/<digits>), with an
// optional trailing slash, query or fragment after the id.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:[A-Za-z0-9_]{1,15}\/status\/[0-9]+|i\/web\/status\/[0-9]+)(?:[/?#].*)?$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(botDir, "POST.json");
let bytes: Buffer;
try {
  bytes = readFileSync(postPath);
} catch {
  fail(`cannot read ${postPath}`);
}

if (bytes.length > MAX_POST_BYTES) {
  fail(`POST.json is ${bytes.length} bytes, over the ${MAX_POST_BYTES} byte cap`);
}

let post: unknown;
try {
  post = JSON.parse(bytes.toString("utf8"));
} catch {
  fail("POST.json is not valid JSON");
}

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  fail("POST.json must be a JSON object");
}

const url = (post as { url?: unknown }).url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  fail("POST.json must carry a url string naming an X post");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), bytes);
