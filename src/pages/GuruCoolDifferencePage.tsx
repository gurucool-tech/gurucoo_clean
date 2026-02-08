import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, CheckCircle2, X, Shield, Bell, Settings, Users, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20understand%20what%20makes%20you%20different.";

const differentiators = [
  { icon: Bell, title: "WhatsApp-First Communication", description: "Parents receive all updates on WhatsApp — no app downloads, no forgotten passwords.", whatOthersDo: "Require parents to download a separate app that often goes unused", whatWeDo: "Send all updates directly to WhatsApp where parents already are" },
  { icon: Shield, title: "QR + Face Attendance", description: "Secure, verifiable attendance with QR ID cards and optional face recognition.", whatOthersDo: "Basic attendance marking without verification", whatWeDo: "QR-coded ID cards with photo verification and optional face recognition" },
  { icon: Settings, title: "Staged Rollout Approach", description: "Start with attendance and core features. Add modules as your school gets comfortable.", whatOthersDo: "Push all features at once, overwhelming staff and causing poor adoption", whatWeDo: "Start simple, add features when you're ready, grow at your own pace" },
  { icon: Users, title: "Built for Indian Schools", description: "Designed specifically for how Indian schools operate.", whatOthersDo: "Adapt international software that doesn't understand Indian education", whatWeDo: "Purpose-built for Indian K-12 schools with local understanding" },
  { icon: Zap, title: "Free Setup & Training", description: "We don't just give you software. We help you get started.", whatOthersDo: "Leave schools to figure out setup on their own", whatWeDo: "Dedicated team helps with configuration, data import, and training" },
];

export default function GuruCoolDifferencePage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="The GuruCool Difference | Why Choose GuruCool"
        description="What sets GuruCool apart: WhatsApp-first communication, QR + Face attendance, staged rollout, and purpose-built for Indian schools."
        canonical="/gurucool-difference"
      />
      <PageHeader 
        title="The GuruCool Difference" 
        subtitle="What sets us apart from other school management systems. Real differentiators, not marketing buzzwords." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "The GuruCool Difference" }]} 
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

      {/* Differentiators Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {differentiators.map((diff, index) => (
              <div key={diff.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <diff.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-caption text-primary font-medium">Differentiator {index + 1}</span>
                    </div>
                    <h2 className="text-heading-xl font-bold text-foreground mb-3">{diff.title}</h2>
                    <p className="text-body-lg text-muted-foreground">{diff.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-900/30">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-body-sm font-medium text-red-700 dark:text-red-400">What others do</span>
                          <p className="text-body-sm text-red-600 dark:text-red-300 mt-1">{diff.whatOthersDo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-900/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-body-sm font-medium text-green-700 dark:text-green-400">What we do</span>
                          <p className="text-body-sm text-green-600 dark:text-green-300 mt-1">{diff.whatWeDo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
