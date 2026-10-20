import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/gurucool-logo.png";

const LINKEDIN_URL = "https://www.linkedin.com/company/gurucool-technologies/about/?viewAsMember=true";
const INSTAGRAM_URL = "https://www.instagram.com/edugurucool?igsh=MTJib3IyZ3NkNmJ0NA==";

const footerGroups = [
  { title: "Platform", links: [
    { label: "Product overview", href: "/product" },
    { label: "Features", href: "/features" },
    { label: "Plans", href: "/plans" },
    { label: "Book a walkthrough", href: "/book-demo" },
  ] },
  { title: "Solutions", links: [
    { label: "Educational institutions", href: "/solutions/educational-institutions" },
    { label: "Schools", href: "/solutions/schools" },
    { label: "Colleges", href: "/solutions/colleges" },
    { label: "Tuition and coaching", href: "/solutions/tuition-coaching" },
    { label: "Multi-campus groups", href: "/solutions/multi-campus" },
  ] },
  { title: "Resources", links: [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/guides" },
    { label: "FAQ", href: "/faq" },
  ] },
  { title: "Company", links: [
    { label: "Our story", href: "/about" },
    { label: "Vision and mission", href: "/vision-mission" },
    { label: "Leadership", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ] },
];

const footerLinkClass = "inline-flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-[hsl(var(--gc-action))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gc-action))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--gc-ink))]";

export function Footer() {
  return (
    <footer className="footer-ink border-t border-white/10" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center rounded-lg bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gc-action))]" aria-label="GuruCool home">
              <img src={logo} alt="GuruCool" className="h-8 w-auto" loading="lazy" width={120} height={32} />
            </Link>
            <p className="mt-5 text-lg font-semibold text-white">Everything connected. One institution.</p>
            <Link to="/book-demo" className="footer-action group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:text-[hsl(var(--gc-action))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gc-action))]">
              Book a walkthrough <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--gc-brass))]">{group.title}</h2>
                <ul className="space-y-0.5">
                  {group.links.map((link) => <li key={link.href}><Link to={link.href} className={footerLinkClass}>{link.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <address className="flex flex-col gap-1 not-italic sm:flex-row sm:flex-wrap sm:gap-x-6">
            <a href="mailto:edu.gurucool@gmail.com" className={footerLinkClass}><Mail className="mr-2 h-4 w-4" aria-hidden="true" />edu.gurucool@gmail.com</a>
            <a href="tel:+917058905200" className={footerLinkClass}><Phone className="mr-2 h-4 w-4" aria-hidden="true" />+91 70589 05200</a>
            <span className="inline-flex min-h-11 items-center text-sm text-white/70"><MapPin className="mr-2 h-4 w-4" aria-hidden="true" />Thane, Maharashtra, India</span>
          </address>
          <div className="flex items-center gap-2">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[hsl(var(--gc-action))] hover:text-[hsl(var(--gc-action))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gc-action))]" aria-label="GuruCool on LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[hsl(var(--gc-action))] hover:text-[hsl(var(--gc-action))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gc-action))]" aria-label="GuruCool on Instagram"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GuruCool Technologies.</p>
          <div className="flex gap-5"><Link to="/privacy" className="hover:text-white">Privacy policy</Link><Link to="/terms" className="hover:text-white">Terms of service</Link></div>
        </div>
      </div>
    </footer>
  );
}
