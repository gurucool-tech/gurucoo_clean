import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = resolve(process.cwd());
const productionOrigin = "https://edugurucool.in";

describe("crawler discovery files", () => {
  it("keeps the sitemap synchronized with public router paths", () => {
    const app = readFileSync(resolve(root, "src/App.tsx"), "utf8");
    const sitemap = readFileSync(resolve(root, "public/sitemap.xml"), "utf8");
    const routes = [...app.matchAll(/<Route path="([^"*]+)"/g)].map((match) => match[1]);
    const sitemapPaths = [...sitemap.matchAll(/<loc>https:\/\/edugurucool\.in([^<]*)<\/loc>/g)]
      .map((match) => match[1] || "/");

    expect(new Set(sitemapPaths)).toEqual(new Set(routes));
  });

  it("publishes simple, standards-based robots rules", () => {
    const robots = readFileSync(resolve(root, "public/robots.txt"), "utf8");
    expect(robots.replace(/\r\n/g, "\n")).toContain("User-agent: *\nAllow: /");
    expect(robots).toContain(`Sitemap: ${productionOrigin}/sitemap.xml`);
  });

  it("uses only absolute canonical links in llms.txt", () => {
    const llms = readFileSync(resolve(root, "public/llms.txt"), "utf8");
    const links = [...llms.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
    expect(links.length).toBeGreaterThan(0);
    expect(links.every((link) => link.startsWith(productionOrigin))).toBe(true);
  });
});
