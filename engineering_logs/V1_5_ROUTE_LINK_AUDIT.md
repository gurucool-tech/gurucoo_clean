# GuruCool V1.5 Static Route and Link Audit

Date: 2026-10-20  
Scope: current V1 React application only  
Method: static inspection of `src/App.tsx`, shared layout, reachable page components, SEO metadata, and `public/_redirects`. No browser or HTTP validation was performed.

## Summary

- Registered internal routes checked: 24 plus the wildcard 404 route.
- Shared header targets checked: 20 internal route references and 2 WhatsApp actions across desktop/mobile render paths.
- New footer targets checked: 21 internal route references, 2 social links, 1 email link, and 1 telephone link.
- Confirmed invalid shared link removed: `/case-studies` (no matching route).
- Speculative redirects added: 0.
- External destinations requiring founder/live-browser confirmation: LinkedIn, Instagram, Google Forms, WhatsApp, and X/Twitter SEO identity.

## Registered Routes

| Target | Source | Status | Action |
|---|---|---:|---|
| `/` | `src/App.tsx` | VALID | Retained |
| `/book-demo` | `src/App.tsx` | VALID | Retained for backward compatibility; visible copy changed to “Book a walkthrough” |
| `/features` | `src/App.tsx` | VALID | Retained |
| `/plans` | `src/App.tsx` | VALID | Retained |
| `/product` | `src/App.tsx` | VALID | Retained |
| `/faq` | `src/App.tsx` | VALID | Retained |
| `/contact` | `src/App.tsx` | VALID | Retained |
| `/about` | `src/App.tsx` | VALID | Retained |
| `/solutions/educational-institutions` | `src/App.tsx` | VALID | Retained |
| `/solutions/schools` | `src/App.tsx` | VALID | Retained |
| `/solutions/colleges` | `src/App.tsx` | VALID | Retained |
| `/solutions/tuition-coaching` | `src/App.tsx` | VALID | Retained |
| `/solutions/multi-campus` | `src/App.tsx` | VALID | Retained |
| `/blog` | `src/App.tsx` | VALID | Retained |
| `/blog/attendance-accuracy-matters` | `src/App.tsx` | VALID | Retained |
| `/blog/whatsapp-advantage-parent-apps` | `src/App.tsx` | VALID | Retained |
| `/blog/staged-approach-school-digitization` | `src/App.tsx` | VALID | Retained |
| `/guides` | `src/App.tsx` | VALID | Retained |
| `/vision-mission` | `src/App.tsx` | VALID | Retained |
| `/team` | `src/App.tsx` | VALID | Retained |
| `/customers` | `src/App.tsx` | VALID | Retained |
| `/careers` | `src/App.tsx` | VALID | Retained |
| `/terms` | `src/App.tsx` | VALID | Retained |
| `/privacy` | `src/App.tsx` | VALID | Retained |
| `*` | `src/App.tsx` | VALID | Existing 404 fallback retained |

## Shared Navigation and Conversion Links

| Label | Source | Target | Type | Matching route | Status | Action |
|---|---|---|---|---|---:|---|
| Product | `Header.tsx` | `/product` | Internal | `/product` | VALID | Retained |
| Solutions menu | `Header.tsx` | five `/solutions/*` targets | Internal | All five present | VALID | Retained |
| Pricing | `Header.tsx` | `/plans` | Internal | `/plans` | VALID | Retained |
| Resources menu | `Header.tsx` | `/blog`, `/guides`, `/faq` | Internal | All present | VALID | Retained |
| Company menu | `Header.tsx` | `/about`, `/vision-mission`, `/team`, `/customers`, `/careers`, `/contact` | Internal | All present | VALID | Retained |
| Book a walkthrough | `Header.tsx`, pages, blogs, `PreFooterCTA.tsx`, `Footer.tsx` | `/book-demo` | Internal | `/book-demo` | VALID | Visible vocabulary standardized; route preserved |
| Talk to us | `PreFooterCTA.tsx` | `/contact` | Internal | `/contact` | VALID | Added as restrained secondary text action |
| WhatsApp | `Header.tsx`, `WhatsAppButton.tsx`, reachable pages | `https://wa.me/...` | External | N/A | REVIEW | Scheme and phone format are valid; live account/message behavior needs manual confirmation |

## Footer Audit

| Group | Targets | Status | Action |
|---|---|---:|---|
| Platform | `/product`, `/features`, `/plans`, `/book-demo` | VALID | Rebuilt from existing routes |
| Solutions | five registered solution routes | VALID | Rebuilt from existing routes |
| Resources | `/blog`, `/guides`, `/faq` | VALID | Removed dead `/case-studies` link |
| Company | `/about`, `/vision-mission`, `/team`, `/careers`, `/contact` | VALID | Rebuilt from existing routes |
| Legal | `/privacy`, `/terms` | VALID | Retained |
| Partner with us | Google Forms | REVIEW | Removed from primary footer prominence; careers/contact form usage remains elsewhere |

## External, Mail, Telephone, Social, and Metadata Targets

| Target | Source | Status | Action |
|---|---|---:|---|
| `mailto:edu.gurucool@gmail.com` | Footer, contact, privacy, terms | VALID | Syntax retained |
| `tel:+917058905200` | Footer, contact | VALID | E.164-like syntax retained |
| Other contact numbers | `ContactPage.tsx` | VALID | Valid `tel:` syntax; ownership requires business confirmation |
| LinkedIn company URL | Footer, SEO | REVIEW | HTTPS and safe new-tab attributes confirmed; live destination needs manual check |
| Instagram URL | Footer, SEO | REVIEW | HTTPS and safe new-tab attributes confirmed; live destination needs manual check |
| X/Twitter identity URL | `SEO.tsx` | REVIEW | HTTPS syntax valid; profile existence needs manual check |
| Google Forms application/contact URL | Careers/contact flows | REVIEW | HTTPS syntax and safe new-tab attributes confirmed; live form needs manual check |
| `https://edugurucool.in/blog/...` structured-data URLs | Three registered blog article pages | VALID | Corrected to the current domain; each path matches its registered local route |

## Redirect and Fallback Configuration

- `public/_redirects` contains the existing SPA fallback, so client-side routes can resolve through `index.html` on the configured static host.
- No `/demo`, `/book-a-demo`, `/get-started`, `/partner`, or `/partnership` route currently exists in `src/App.tsx`.
- No speculative legacy redirect was added because no confirmed replacement mapping exists beyond the already valid `/book-demo` path.
- `netlify.toml` was inspected but not changed, per scope.

## Security-Oriented Link Checks

- No `javascript:` URL found.
- No static `href="#"` placeholder found.
- Changed-scope `_blank` links include `rel="noopener noreferrer"`.
- WhatsApp, social, form, email, and telephone destinations contain no embedded credentials or secrets.
- Dynamic WhatsApp messages are encoded before navigation in the contact and guides flows.
