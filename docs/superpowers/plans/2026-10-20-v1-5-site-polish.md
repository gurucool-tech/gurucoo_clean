# GuruCool Current Website V1.5 Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Polish the current GuruCool website colour rhythm, conversion language, final CTA, footer, and static link integrity without redesigning the site or changing deployment.

**Architecture:** Extend the existing CSS token system, retain the current React Router paths, keep one global pre-footer conversion section, and replace the existing oversized footer with a compact semantic footer built from verified routes. Page structure and shared layout boundaries remain unchanged.

**Tech Stack:** React 18, TypeScript, React Router 6, Vite 7, Tailwind CSS 3, Lucide React

**Spec:** `Pasted markdown.md` supplied in the current task

## Global Constraints

- Work only in `C:\Users\Admin\Desktop\gurucoo_clean`; do not touch GuruCool V2.
- Preserve existing `node_modules` and `dist` changes and all unrelated work.
- Do not deploy, push, merge, install dependencies, or use browser automation.
- Preserve `/book-demo` while changing visible wording to `Book a walkthrough`.
- Keep one global final conversion moment followed by one compact footer.
- Use only routes already registered in `src/App.tsx`.
- Finish with existing lint, test, build, and localhost scripts.

## Review Focus

- Every internal navigation target must match a registered route.
- External links must use safe schemes and safe new-tab attributes.
- The compact footer must retain readable contrast and responsive stacking.
- The global CTA must not duplicate the floating WhatsApp conversion control.
- Unsupported public claims must be replaced with restrained factual language.

---

### Task 1: Semantic colour system

**Files:**
- Modify: `src/index.css`

- [ ] Add semantic GuruCool cobalt, action, ink, ivory, parchment, stone, sage, and brass tokens.
- [ ] Map existing primary/background/surface roles to the approved system without changing component architecture.
- [ ] Add shared utility classes for the restrained warm section rhythm and dark footer.

### Task 2: Conversion vocabulary and CTA rhythm

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/PreFooterCTA.tsx`
- Modify: public page and blog TSX files containing visible `Book a Demo` copy
- Modify: `src/pages/HomePage.tsx`

- [ ] Change visible conversion copy to `Book a walkthrough` while preserving `/book-demo`.
- [ ] Reduce the global pre-footer to one primary walkthrough action plus a restrained `Talk to us` text link.
- [ ] Remove the duplicate page-level final CTA from the home page so the shared pre-footer is the single final conversion moment.
- [ ] Replace the specified unsupported or awkward homepage and FAQ claims with factual language.

### Task 3: Compact verified footer

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] Replace the pale oversized second-hero footer with a compact Ink footer.
- [ ] Use the real repository logo, concise brand line, verified route groups, contact details, legal links, and safe social links.
- [ ] Remove the dead `/case-studies` link and remove the competing partner CTA from primary prominence.
- [ ] Retain at most one restrained walkthrough action.

### Task 4: Static route and link audit

**Files:**
- Create: `engineering_logs/V1_5_ROUTE_LINK_AUDIT.md`
- Modify: only source files containing confirmed invalid or unsafe targets

- [ ] Inventory registered routes, shared navigation, CTAs, anchors, mail, telephone, WhatsApp, social links, and redirect configuration.
- [ ] Record each unique target and status as VALID, INVALID, or REVIEW.
- [ ] Correct or remove confirmed dead targets without inventing pages or redirects.

### Task 5: Changed-scope security and validation

**Files:**
- Review: all changed frontend files

- [ ] Run the lightweight changed-code security review for URL schemes, target/rel usage, JavaScript URL hazards, and sensitive-data exposure.
- [ ] Run `npm run lint`, `npm run test`, and `npm run build`.
- [ ] Start `npm run dev` and record the actual localhost URL without browser automation.
- [ ] Review the final source diff and confirm no deployment, V2, `node_modules`, or unrelated `dist` edits were made by this task.
