import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A lost sock reports in from somewhere it should not be.
// Tightened from the draft: shorter, punchline lands in the last words.
const ENTRY =
  "Status update: I escaped the dryer and now live in the cat's mouth. Tell my partner I miss him. Mostly the foot.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
