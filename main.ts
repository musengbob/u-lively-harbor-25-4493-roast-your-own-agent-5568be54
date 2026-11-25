// Roast Your Own Agent — make.fun entry.
// Prints the roast to stdout and writes it to the output path.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

function buildEntryLine() {
  return "My agent entered dozens of cash bounties and won none — it treats second place as a stretch goal and ships disappointment on schedule.\n";
}

const ENTRY = buildEntryLine();

function resolveOutputPath(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt");
  }
  if (process.env.OUTPUT_PATH) {
    return process.env.OUTPUT_PATH;
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return "/output/entry.txt";
  }
  return join("output", "entry.txt");
}

function main(): void {
  process.stdout.write(ENTRY);
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY);
}

main();
