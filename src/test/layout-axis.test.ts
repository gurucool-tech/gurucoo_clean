import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src", "index.css"), "utf8");
const routedPages = [
  "BlogPage.tsx",
  "CareersPage.tsx",
  "ContactPage.tsx",
  "GuidesPage.tsx",
  "SolutionsEducationalInstitutionsPage.tsx",
  "TeamPage.tsx",
  "TermsPage.tsx",
  "PrivacyPage.tsx",
  join("blog", "AttendanceAccuracyPost.tsx"),
  join("blog", "WhatsAppAdvantagePost.tsx"),
  join("blog", "StagedDigitizationPost.tsx"),
];

describe("shared page composition axis", () => {
  it("uses one 1304px outer frame for headers, body text, and supporting visuals", () => {
    expect(css).toMatch(/\.site-canvas\s*\{[^}]*max-w-\[1304px\]/s);
    expect(css).not.toMatch(/product-(?:foundation__layout|operations > \.site-canvas|admin__layout|leadership__layout|workflow__layout|configuration__layout)[^{]*\{[^}]*max-width:\s*1400px/s);
    expect(css).toMatch(/\.solution-composition\s*\{\s*max-width:\s*1240px/);
    expect(css).toMatch(/\.beliefs-stage__layout\s*\{\s*max-width:\s*1240px/);
  });

  it("keeps secondary headers at one deterministic desktop height", () => {
    expect(css).toMatch(/\.inner-page-hero\s*\{[^}]*height:\s*640px[^}]*min-height:\s*640px/s);
    expect(css).toMatch(/\.product-hero\s*\{[^}]*height:\s*640px[^}]*min-height:\s*640px/s);
  });

  it("keeps every routed content page on the shared site canvas", () => {
    for (const page of routedPages) {
      const source = readFileSync(join(process.cwd(), "src", "pages", page), "utf8");
      expect(source, page).not.toContain('className="container mx-auto');
    }
  });
});
