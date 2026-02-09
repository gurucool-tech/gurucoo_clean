import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/gurucool-logo.png";

const LINKEDIN_URL = "https://www.linkedin.com/company/gurucool-technologies/about/?viewAsMember=true";
const INSTAGRAM_URL = "https://www.instagram.com/edugurucool?igsh=MTJib3IyZ3NkNmJ0NA==";
const FORM_URL = "https://forms.gle/XR7p3yEcvzdZzZms9";

const footerLinks = {
  product: [
    { label: "Product Overview", href: "/product" },
    { label: "Feature Tour", href: "/features" },
    { label: "Mobile Access", href: "/mobile-access" },
    { label: "Multi-School", href: "/multi-school" },
    { label: "Integrations", href: "/integrations" },
    { label: "Why GuruCool", href: "/why-gurucool" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Vision & Mission", href: "/vision-mission" },
    { label: "Leadership", href: "/team" },
    { label: "Customers", href: "/customers" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Guides & Ebooks", href: "/guides" },
  ],
  services: [
    { label: "Partner Program", href: "/partner-program" },
    { label: "Custom ERP", href: "/custom-erp" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-2">
                <img src={logo} alt="GuruCool logo" className="h-8 w-auto" />
              </div>
              <span className="text-xl font-bold">GuruCool</span>
            </Link>
            <p className="text-primary-foreground/60 text-body-sm mb-5 max-w-xs">
              Smart School Management System built for Indian schools. Run your school properly from Day 1.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-5">
              <a
                href="tel:+917058905200"
                className="flex items-center gap-2 text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 70589 05200
              </a>
              <a
                href="mailto:edu.gurucool@gmail.com"
                className="flex items-center gap-2 text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                edu.gurucool@gmail.com
              </a>
              <div className="flex items-start gap-2 text-body-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Thane, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mb-5">
              <p className="text-caption text-primary-foreground/40 mb-2">Follow us</p>
              <div className="flex items-center gap-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/50 hover:text-guru-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/50 hover:text-guru-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <p className="text-caption text-primary-foreground/40 mb-1">Quick actions</p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
              >
                Partner / Careers Form
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-3 text-body-sm text-primary-foreground/90">Product</h4>
            <ul className="space-y-1.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-3 text-body-sm text-primary-foreground/90">Company</h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-3 text-body-sm text-primary-foreground/90">Resources</h4>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-3 text-body-sm text-primary-foreground/90">Services</h4>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-primary-foreground/60 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-sm text-primary-foreground/40">
            © {new Date().getFullYear()} GuruCool. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-body-sm text-primary-foreground/40 hover:text-primary-foreground/95 hover:underline decoration-primary-foreground/30 underline-offset-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
