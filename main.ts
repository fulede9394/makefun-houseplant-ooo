import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Houseplant out-of-office: a fern, unwatered since March.
const LINE =
  "Out of office. I'm a fern, unwatered since March, and my auto-reply is the only thing here still alive.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
