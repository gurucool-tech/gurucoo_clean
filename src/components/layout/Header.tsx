import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gurucool-logo.png";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20plans%20for%20our%20school.";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  {
    label: "Product",
    children: [
      { label: "Product Overview", href: "/product", description: "Complete system overview" },
      { label: "Feature Tour", href: "/features", description: "Explore all modules" },
      { label: "Mobile Access", href: "/mobile-access", description: "Access on any device" },
      { label: "Multi-School", href: "/multi-school", description: "Manage multiple campuses" },
      { label: "Student Information System", href: "/sis", description: "Student data management" },
      { label: "Custom ERP", href: "/custom-erp", description: "Tailored solutions" },
      { label: "Integrations", href: "/integrations", description: "Connect your tools" },
      { label: "Why GuruCool", href: "/why-gurucool", description: "Reasons to choose us" },
      { label: "The GuruCool Difference", href: "/gurucool-difference", description: "What sets us apart" },
      { label: "FAQ", href: "/faq", description: "Common questions" },
    ],
  },
  {
    label: "Partner",
    href: "/partner-program",
  },
  {
    label: "Plans",
    href: "/plans",
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog", description: "Insights and updates" },
      { label: "Case Studies", href: "/case-studies", description: "Success stories" },
      { label: "Guides & Ebooks", href: "/guides", description: "Free resources" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about", description: "How we started" },
      { label: "Vision & Mission", href: "/vision-mission", description: "What drives us" },
      { label: "Leadership", href: "/team", description: "Meet our team" },
      { label: "Customers", href: "/customers", description: "Schools we serve" },
      { label: "Careers", href: "/careers", description: "Join us" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="GuruCool" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground">GuruCool</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                    className={`flex items-center gap-1 px-4 py-2 text-body-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-body-sm font-medium rounded-lg transition-colors ${
                      openDropdown === item.label
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="bg-card rounded-xl shadow-premium-lg border border-border/50 py-2 min-w-[280px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
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
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/book-demo">
                <Calendar className="w-4 h-4" />
                Book a Demo
              </Link>
            </Button>
            <Button asChild size="sm" className="gap-2 bg-whatsapp hover:bg-whatsapp-hover">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Contact on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
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
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3 px-4">
              <Button asChild variant="outline" className="w-full gap-2">
                <Link to="/book-demo" onClick={() => setMobileOpen(false)}>
                  <Calendar className="w-4 h-4" />
                  Book a Demo
                </Link>
              </Button>
              <Button asChild className="w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover">
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
