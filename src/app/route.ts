import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

const referencePath = join(
  process.cwd(),
  "src",
  "Final_Abbo_Law_10-30-26.html",
);
const appearanceStylesPath = join(
  process.cwd(),
  "src",
  "app",
  "appearance.css",
);
const referenceHtml = readFileSync(referencePath, "utf8");
const appearanceStyles = readFileSync(appearanceStylesPath, "utf8");

if (!/<\/head\s*>/i.test(referenceHtml)) {
  throw new Error(`The HTML reference at ${referencePath} has no closing head tag`);
}

const html = referenceHtml.replace(
  /<\/head\s*>/i,
  `<style>${appearanceStyles}</style></head>`,
);

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
