import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { collectRevealTargets, siteRevealKeyframes, siteRevealTiming } from "@/lib/siteScrollReveal";

const REVEAL_BOUND = "scrollRevealBound";

export function SiteScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || typeof IntersectionObserver === "undefined") return;
    const systemReducesMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const target = entry.target as HTMLElement;
          observer.unobserve(target);
          const animation = target.animate(siteRevealKeyframes, siteRevealTiming);
          animation.addEventListener("finish", () => {
            target.style.opacity = "1";
            target.style.transform = "none";
          }, { once: true });
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6%" },
    );

    const bindTargets = () => {
      for (const target of collectRevealTargets(document, systemReducesMotion)) {
        if (target.dataset[REVEAL_BOUND] === "true") continue;
        target.dataset[REVEAL_BOUND] = "true";
        target.style.opacity = "0";
        target.style.transform = "translate3d(0, 34px, 0)";
        target.style.willChange = "transform, opacity";
        observer.observe(target);
      }
    };

    const frame = requestAnimationFrame(bindTargets);
    const mutations = new MutationObserver(bindTargets);
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
