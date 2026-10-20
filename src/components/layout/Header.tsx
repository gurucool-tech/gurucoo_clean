import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new-blue.png";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20walkthrough%20and%20understand%20plans%20for%20our%20institution.";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Solutions",
    children: [
      { label: "Educational Institutions", href: "/solutions/educational-institutions", description: "Operating layer for all" },
      { label: "Schools", href: "/solutions/schools", description: "K-12 connected operations" },
      { label: "Colleges", href: "/solutions/colleges", description: "Higher education scale" },
      { label: "Tuition & Coaching", href: "/solutions/tuition-coaching", description: "Branch and student tracking" },
      { label: "Multi-Campus Groups", href: "/solutions/multi-campus", description: "Centralized visibility" },
    ],
  },
  {
    label: "Pricing",
    href: "/plans",
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog", description: "Insights and updates" },
      { label: "Guides", href: "/guides", description: "Free resources" },
      { label: "FAQ", href: "/faq", description: "Common questions" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "Our Story", href: "/about", description: "Why we exist" },
      { label: "Vision & Mission", href: "/vision-mission", description: "What drives us" },
      { label: "Leadership", href: "/team", description: "Meet our team" },
      { label: "Institution fit", href: "/customers", description: "Who GuruCool is designed for" },
      { label: "Careers", href: "/careers", description: "Join us" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/95 shadow-[var(--shadow-nav)] backdrop-blur-lg transition-[background-color,border-color,box-shadow] duration-200 xl:left-1/2 xl:right-auto xl:top-3 xl:w-[calc(100%-3rem)] xl:max-w-[1400px] xl:-translate-x-1/2 xl:rounded-xl xl:border">
      <div className="w-full px-4 lg:px-6">
        <div className="flex h-[64px] items-center justify-between xl:h-[72px] xl:gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" title="GuruCool Home">
            <img 
              src={logo} 
              alt="GuruCool" 
              className="h-12 w-auto object-contain"
              loading="eager"
              fetchPriority="high"
              width={180}
              height={48}
            />
            <span className="text-xl font-bold text-foreground">GuruCool</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative nav-item"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    title={`Go to ${item.label}`}
                    className={`nav-link-desktop flex items-center gap-1 px-4 py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`nav-link-desktop flex items-center gap-1 px-4 py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors ${
                      openDropdown === item.label
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-[opacity,transform] duration-200 ${
                      openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="bg-card rounded-lg shadow-[var(--shadow-lg)] border border-border py-2 min-w-[280px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          title={child.description || child.label}
                          className="flex flex-col px-4 py-3 hover:bg-muted/50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="text-body-sm font-medium text-foreground">{child.label}</span>
                          {child.description && (
                            <span className="text-caption text-muted-foreground">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="gap-2 rounded-lg border-primary/35 font-bold transition-[color,background-color,border-color,box-shadow,transform] hover:-translate-y-px hover:bg-accent">
              <Link to="/book-demo" title="Schedule a live platform walkthrough">
                <Calendar className="w-4 h-4" />
                Book a walkthrough
              </Link>
            </Button>
            <Button asChild size="sm" className="gap-2 rounded-lg bg-primary font-bold text-primary-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:bg-[hsl(var(--gc-deep-navy))] hover:shadow-[var(--shadow-md)] active:translate-y-0">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Chat with GuruCool on WhatsApp">
                <MessageCircle className="w-4 h-4" />
                Contact on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden rounded-lg p-2 text-foreground transition-colors hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="xl:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-body-sm font-medium text-foreground hover:bg-muted/50 rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-body-sm font-medium text-foreground hover:bg-muted/50 rounded-lg"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && item.children && (
                        <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-4 py-2 text-body-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3 px-4 pb-4">
              <Button asChild variant="outline" className="w-full gap-2 rounded-lg border-primary/35">
                <Link to="/book-demo" onClick={() => setMobileOpen(false)}>
                  <Calendar className="w-4 h-4" />
                  Book a walkthrough
                </Link>
              </Button>
              <Button asChild className="w-full gap-2 rounded-lg bg-primary text-primary-foreground">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
