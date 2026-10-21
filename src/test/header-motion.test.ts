import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src", "index.css"), "utf8");
const home = readFileSync(join(process.cwd(), "src", "pages", "HomePage.tsx"), "utf8");
const product = readFileSync(join(process.cwd(), "src", "pages", "ProductPage.tsx"), "utf8");

describe("shared header entrance motion", () => {
  it("moves copy from the left and visuals from the right without scaling", () => {
    expect(css).toMatch(/@keyframes headerCopyIn\s*\{[^}]*translate3d\(-24px,\s*0,\s*0\)/s);
    expect(css).toMatch(/@keyframes headerVisualIn\s*\{[^}]*translate3d\(28px,\s*0,\s*0\)/s);
    const copyFrames = css.match(/@keyframes headerCopyIn\s*\{[^\n]+/s)?.[0] ?? "";
    const visualFrames = css.match(/@keyframes headerVisualIn\s*\{[^\n]+/s)?.[0] ?? "";
    expect(copyFrames).not.toContain("scale(");
    expect(visualFrames).not.toContain("scale(");
  });

  it("uses the shared header classes on the homepage and Product header", () => {
    expect(home).toContain("header-motion-copy");
    expect(home).toContain("header-motion-visual");
    expect(product).toContain("header-motion-copy");
    expect(product).toContain("header-motion-visual");
  });
});
