const CONTENT_ROOT_SELECTOR = [
  ":scope > .site-canvas",
  ":scope > .container-wide",
  ":scope > .container",
  ":scope > .section-container",
].join(", ");

const EXCLUDED_SECTION_SELECTOR = ".inner-page-hero, .product-hero, .home-hero-composition";
const FRAMER_STYLE_SELECTOR = '[style*="translate"], [style*="transform"], [style*="opacity"]';

export function collectRevealTargets(root: Document | Element, includeMotionManaged = false): HTMLElement[] {
  const sections = Array.from(root.querySelectorAll<HTMLElement>("main section"));

  return sections.flatMap((section) => {
    if (section.matches(EXCLUDED_SECTION_SELECTOR)) return [];

    const target = section.querySelector<HTMLElement>(CONTENT_ROOT_SELECTOR);
    if (!target || (!includeMotionManaged && target.querySelector(FRAMER_STYLE_SELECTOR))) return [];

    return [target];
  });
}

export const siteRevealKeyframes: Keyframe[] = [
  { opacity: 0, transform: "translate3d(0, 34px, 0)" },
  { opacity: 1, transform: "translate3d(0, -2px, 0)", offset: 0.88 },
  { opacity: 1, transform: "translate3d(0, 0, 0)" },
];

export const siteRevealTiming: KeyframeAnimationOptions = {
  duration: 720,
  easing: "cubic-bezier(0.22, 0.78, 0.24, 1)",
  fill: "forwards",
};
