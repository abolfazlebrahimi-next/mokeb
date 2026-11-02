import { cp, mkdir } from "node:fs/promises";

const standaloneDir = ".next/standalone";

await mkdir(`${standaloneDir}/.next`, { recursive: true });
await cp(".next/static", `${standaloneDir}/.next/static`, { recursive: true });
await cp("public", `${standaloneDir}/public`, { recursive: true });
