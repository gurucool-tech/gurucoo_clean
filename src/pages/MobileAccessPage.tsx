import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Smartphone, Tablet, Monitor, CheckCircle2, Users, GraduationCap, Building2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20mobile%20access.";

const accessMethods = [
  { icon: Building2, title: "Administrators", description: "Full dashboard access from any device.", features: ["Real-time attendance monitoring", "Fee status overview", "Staff management", "Reports and analytics"] },
  { icon: GraduationCap, title: "Teachers", description: "Mark attendance, manage classwork from any browser.", features: ["Quick attendance marking", "Homework assignment", "Exam management", "Leave applications"] },
  { icon: Users, title: "Parents", description: "Receive all updates directly on WhatsApp.", features: ["Instant attendance alerts", "Fee reminders", "Exam notifications", "School announcements"] },
];

const devices = [
  { icon: Monitor, label: "Desktop", description: "Full-featured dashboard experience" },
  { icon: Tablet, label: "Tablet", description: "Perfect for classroom use" },
  { icon: Smartphone, label: "Mobile", description: "Manage on the go" },
];

export default function MobileAccessPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Mobile Access | GuruCool School Management"
        description="Access GuruCool from any device. Responsive web dashboard for admins and teachers. WhatsApp updates for parents—no app needed."
        canonical="/mobile-access"
      />
      <PageHeader 
        title="Access GuruCool Anywhere" 
        subtitle="GuruCool works seamlessly across all devices. Administrators and teachers use a responsive web app. Parents get updates via WhatsApp — no separate app needed." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Mobile Access" }]} 
      />

      {/* CTA Section */}
      <section className="py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp-hover">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/book-demo">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Works on Every Device</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {devices.map((device) => (
                <div key={device.label} className="text-center bg-card rounded-xl border border-border/50 p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <device.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-heading-lg font-bold text-foreground mb-2">{device.label}</h3>
                  <p className="text-body-md text-muted-foreground">{device.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access by Role Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Access by Role</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {accessMethods.map((method) => (
                <div key={method.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-lg font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-body-md text-muted-foreground mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
