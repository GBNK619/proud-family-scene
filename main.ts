// Proud Family Scene — make.fun one-liner entry.
// Writes one short family scene to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dad guarded the thermostat like a dragon for twenty years; tonight he taught his granddaughter to set it herself, then stood back and watched her do it three times, prouder than if he had won anything.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE + "\n", "utf8");
  console.log(`wrote ${target}`);
}

main();
