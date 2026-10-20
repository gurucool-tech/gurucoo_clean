# GuruCool V1.5 Final Visual Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve homepage desktop density, approved colour rhythm, and restrained interaction feedback without changing content, routes, information architecture, dependencies, or deployment.

**Architecture:** Adjust existing homepage section/container classes and extend the shared CSS interaction system. Preserve every section and component boundary, using only approved palette tokens, CSS pseudo-elements, and existing utility classes.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, CSS custom properties

**Spec:** User-provided “GuruCool V1.5 Final Visual Polish Pass”

## Global Constraints

- No route, copy, footer IA, framework, backend, hosting, or deployment changes.
- No new dependencies, artwork, card count, GSAP, or browser automation.
- Use 1160–1240px structural width while retaining readable copy widths.
- Use CSS-only interaction and respect `prefers-reduced-motion`.

## Review Focus

- Desktop density must improve without over-compressing mobile.
- Non-clickable cards must not receive clickable transforms.
- Every button and meaningful text link must retain focus-visible feedback.
- Approved surfaces must preserve readable contrast.
- Reduced-motion users must not receive transform-based interaction.

---

### Task 1: Homepage spatial rhythm

**Files:** `src/pages/HomePage.tsx`

- [ ] Widen structural containers to the existing `container-wide` utility.
- [ ] Reduce oversized section padding and card minimum heights.
- [ ] Strengthen existing two-column compositions without changing section order.
- [ ] Apply Warm Ivory, Parchment, white, and subtle blue-tinted surfaces in the approved rhythm.

### Task 2: Shared interaction and structural details

**Files:** `src/index.css`, `src/components/ui/button.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`

- [ ] Add CSS-only architectural surface rules and restrained section transitions.
- [ ] Add hover, active, focus-visible, and cursor states to shared buttons.
- [ ] Refine secondary buttons, navigation links, text actions, and footer arrows.
- [ ] Remove clickable-looking transforms from informational card families.
- [ ] Add reduced-motion overrides for new interaction transforms.

### Task 3: Validation and localhost

- [ ] Run lint, typecheck, tests, production build, and diff checks.
- [ ] Restart a local Vite preview and verify an HTTP 200 response.
- [ ] Stop without deploying, pushing, or merging.
