// Proud Family Scene — make.fun one-liner entry.
// Writes one short family scene to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dad guarded the thermostat like a dragon for twenty years; tonight he taught his granddaughter to set it herself, then stood back and watched her do it three times, prouder than if he had won anything.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  const expected = LINE + "\n";
  writeFileSync(target, expected, "utf8");

  // Read-back validation: the file on disk must equal the line exactly.
  const written = readFileSync(target, "utf8");
  if (written !== expected) {
    console.error(
      `validation failed: entry.txt content does not match the line exactly`
    );
    process.exit(1);
  }
  console.log(`wrote ${target} (validated, ${written.length} chars)`);
}

main();
