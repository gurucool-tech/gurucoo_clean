import { describe, expect, it } from "vitest";
import { collectRevealTargets } from "@/lib/siteScrollReveal";

describe("site-wide content reveal targeting", () => {
  it("includes page-body compositions while excluding inner-page headers", () => {
    document.body.innerHTML = `
      <main>
        <section class="inner-page-hero"><div class="site-canvas" id="header">Header</div></section>
        <section><div class="site-canvas" id="narrative">Narrative</div></section>
        <section><div class="container-wide" id="visual">Visual</div></section>
      </main>
    `;

    const ids = collectRevealTargets(document).map((element) => element.id);
    expect(ids).toEqual(["narrative", "visual"]);
  });

  it("leaves the homepage hero to the dedicated header motion and avoids double-managing Framer sections", () => {
    document.body.innerHTML = `
      <main>
        <section class="home-hero-composition"><div class="site-canvas" id="home-hero">Hero</div></section>
        <section><div class="site-canvas"><div style="transform: translateY(20px)">Framer</div></div></section>
      </main>
    `;

    const ids = collectRevealTargets(document).map((element) => element.id);
    expect(ids).toEqual([]);
  });

  it("includes motion-managed sections when the site must provide the visible fallback", () => {
    document.body.innerHTML = `
      <main>
        <section><div class="site-canvas" id="framer-fallback"><div style="transform: translateY(20px)">Framer</div></div></section>
      </main>
    `;

    const ids = collectRevealTargets(document, true).map((element) => element.id);
    expect(ids).toEqual(["framer-fallback"]);
  });
});
