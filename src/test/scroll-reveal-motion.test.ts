import { describe, expect, it } from "vitest";
import {
  scrollReveal,
  reducedScrollReveal,
  scrollRevealViewport,
  staggerReveal,
} from "@/lib/scrollRevealMotion";

describe("shared scroll reveal motion", () => {
  it("uses one restrained below-to-rest spring without an artificial keyframe bounce", () => {
    expect(scrollReveal.hidden).toEqual({ opacity: 0, y: 22 });
    expect(scrollReveal.visible).toMatchObject({
      opacity: 1,
      y: 0,
      transition: {
        y: {
          type: "spring",
          duration: 0.62,
          bounce: 0.12,
        },
      },
    });
    expect(scrollReveal.visible).not.toHaveProperty("times");
  });

  it("triggers once and keeps grouped reveals restrained", () => {
    expect(scrollRevealViewport).toEqual({ once: true, amount: 0.14 });
    expect(staggerReveal.visible).toMatchObject({
      transition: { staggerChildren: 0.08 },
    });
  });

  it("removes translation and bounce for reduced motion", () => {
    expect(reducedScrollReveal.hidden).toEqual({ opacity: 0 });
    expect(reducedScrollReveal.visible).toMatchObject({
      opacity: 1,
      transition: { duration: 0.18 },
    });
    expect(reducedScrollReveal.visible).not.toHaveProperty("y");
  });
});
