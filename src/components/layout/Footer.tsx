import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/assets/gurucool-logo.png";

const LINKEDIN_URL = "https://www.linkedin.com/company/gurucool-technologies/about/?viewAsMember=true";
const INSTAGRAM_URL = "https://www.instagram.com/edugurucool?igsh=MTJib3IyZ3NkNmJ0NA==";
const FORM_URL = "https://forms.gle/XR7p3yEcvzdZzZms9";

const footerLinks = {
  product: [
    { label: "Product Overview", href: "/product" },
    { label: "Feature Tour", href: "/features" },
    { label: "Pricing", href: "/plans" },
    { label: "Book a Demo", href: "/book-demo" },
  ],
  solutions: [
    { label: "Educational Institutions", href: "/solutions/educational-institutions" },
    { label: "Schools", href: "/solutions/schools" },
    { label: "Colleges", href: "/solutions/colleges" },
    { label: "Tuition & Coaching", href: "/solutions/tuition-coaching" },
    { label: "Multi-Campus", href: "/solutions/multi-campus" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Leadership", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50/50 border-t border-border/40 text-foreground relative overflow-hidden">
      {/* Subtle structural grid in footer background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        
        {/* Upper Footer - Brand & Positioning */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-16 border-b border-border/40 gap-10">
          <div className="max-w-xl">
            <Link to="/" className="flex items-center gap-2 mb-8 inline-flex" title="GuruCool - Back to Top">
              <div className="bg-white rounded-xl shadow-sm p-2 border border-border/40">
<<<<<<< HEAD
                <img 
                  src={logo} 
                  alt="GuruCool - Connected School Operating System" 
                  className="h-7 w-auto" 
                  loading="lazy" 
                  width={105}
                  height={28}
                />
=======
                <img src={logo} alt="GuruCool - Connected School Operating System" className="h-7 w-auto" loading="lazy" />
>>>>>>> 996b4a335f0adec5746d4d29696f17b9b817767c
              </div>
              <span className="text-2xl font-bold tracking-tight">GuruCool</span>
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight max-w-lg">
              The operating layer for modern educational institutions.
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" title="Join the GuruCool Partner Network" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-border/60 text-sm font-semibold hover:bg-muted/30 transition-all shadow-sm">
              Partner with us
            </a>
            <Link to="/book-demo" title="Request a structural walkthrough of the platform" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all shadow-[var(--shadow-glow)]">
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20">
          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-muted-foreground">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-muted-foreground">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-muted-foreground">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-muted-foreground">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-foreground/70 hover:text-primary transition-colors font-semibold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-muted-foreground">Connect</h4>
            <div className="space-y-6">
              <a href="mailto:edu.gurucool@gmail.com" className="flex items-center gap-4 text-sm text-foreground/70 hover:text-primary transition-colors font-semibold group">
                <div className="w-10 h-10 rounded-full bg-white border border-border/40 flex items-center justify-center group-hover:border-primary/30 shadow-sm transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                edu.gurucool@gmail.com
              </a>
              <a href="tel:+917058905200" className="flex items-center gap-4 text-sm text-foreground/70 hover:text-primary transition-colors font-semibold group">
                <div className="w-10 h-10 rounded-full bg-white border border-border/40 flex items-center justify-center group-hover:border-primary/30 shadow-sm transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                +91 70589 05200
              </a>
              <div className="flex items-center gap-4 text-sm text-foreground/70 font-semibold">
                <div className="w-10 h-10 rounded-full bg-white border border-border/40 flex items-center justify-center shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                Thane, MH, India
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-10 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-sm text-muted-foreground font-semibold">
              © {new Date().getFullYear()} GuruCool Technologies.
            </p>
            <div className="flex items-center gap-8">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} to={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-wider">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all shadow-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
