import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Settings, FileText, Zap, Users, CheckCircle2, Building2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20discuss%20custom%20ERP%20requirements.";

const whenNeeded = [
  { title: "Large School Groups", description: "Multiple campuses with different operational requirements that need a unified yet flexible system." },
  { title: "Unique Workflows", description: "Your school has specific processes that standard software doesn't support." },
  { title: "Legacy System Migration", description: "You have existing data and processes that need careful migration without disruption." },
  { title: "Specific Integrations", description: "You need to connect with specific third-party tools or government systems." },
];

const customizableAreas = [
  { icon: Settings, title: "Workflows", description: "Admission, approval chains, leave processes tailored to your policies" },
  { icon: FileText, title: "Reports", description: "Custom report formats, board-specific templates, trust-level analytics" },
  { icon: Zap, title: "Integrations", description: "Connect with your existing accounting, HR, or transport software" },
  { icon: Users, title: "User Roles", description: "Custom permission sets matching your organizational hierarchy" },
];

const processSteps = [
  { step: "01", title: "Requirements Discovery", description: "We document your specific needs through detailed discussions." },
  { step: "02", title: "Solution Design", description: "Our team designs the customizations and presents a clear plan." },
  { step: "03", title: "Development & Testing", description: "We build and thoroughly test the custom features." },
  { step: "04", title: "Rollout & Support", description: "Phased deployment with training and dedicated support." },
];

export default function CustomERPPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Custom School ERP Development | GuruCool Enterprise"
        description="Custom school ERP solutions for large school groups. Tailored workflows, integrations, and reports for your specific requirements."
        canonical="/custom-erp"
      />
      <PageHeader 
        title="Custom ERP Solutions" 
        subtitle="When your school's requirements go beyond standard features. We build tailored solutions that fit your unique operational needs." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Custom ERP" }]} 
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

      {/* When Needed Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">When Do You Need Custom ERP?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {whenNeeded.map((item) => (
                <div key={item.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-heading-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-body-md text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Areas Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">What Can Be Customized</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizableAreas.map((area) => (
                <div key={area.title} className="bg-card rounded-xl border border-border/50 p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">How We Work</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="text-display-lg font-bold text-primary/10 mb-2">{step.step}</div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
