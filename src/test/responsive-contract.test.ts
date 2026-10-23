import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src", "index.css"), "utf8");
const header = readFileSync(
  join(process.cwd(), "src", "components", "layout", "Header.tsx"),
  "utf8",
);

describe("responsive layout contracts", () => {
  it("keeps the fixed mobile navigation within the available viewport height", () => {
    expect(header).toContain("max-h-[calc(100dvh-64px)]");
    expect(header).toContain("overflow-y-auto");
    expect(header).toContain("overscroll-contain");
  });

  it("stacks shared inner-page heroes at tablet widths", () => {
    expect(css).toMatch(
      /@media \(max-width: 900px\) \{[\s\S]*?\.inner-page-hero__canvas,[\s\S]*?grid-template-columns:\s*1fr;/,
    );
  });
});
