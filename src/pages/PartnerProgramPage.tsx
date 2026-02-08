import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Users, TrendingUp, BookOpen, Headphones, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20am%20interested%20in%20the%20Partner%20Program.";

const partnerTypes = [
  {
    title: "Education Consultants",
    description: "Help schools modernize their operations while earning from referrals.",
  },
  {
    title: "IT Service Providers",
    description: "Add school management consulting to your offerings for education sector clients.",
  },
  {
    title: "Implementation Partners",
    description: "Provide local support and training for GuruCool implementations.",
  },
  {
    title: "School Associations",
    description: "Recommend GuruCool to member schools and earn referral benefits.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Revenue Share", description: "Competitive margins on every school you bring. Recurring revenue as schools grow." },
  { icon: BookOpen, title: "Training & Enablement", description: "Comprehensive training on GuruCool. Sales materials and demo accounts." },
  { icon: Headphones, title: "Dedicated Support", description: "Partner success manager. Priority support for your school clients." },
  { icon: Users, title: "Co-Marketing", description: "Joint marketing opportunities. Featured in our partner directory." },
];

const processSteps = [
  { step: "1", title: "Apply", description: "Fill the form or message us on WhatsApp with your details." },
  { step: "2", title: "Discussion", description: "We'll understand your background and discuss how partnership works." },
  { step: "3", title: "Onboarding", description: "Training, demo accounts, and sales materials provided." },
  { step: "4", title: "Start Earning", description: "Refer schools and earn on every conversion." },
];

export default function PartnerProgramPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Partner Program | GuruCool for Education Partners"
        description="Join GuruCool's partner network. Help schools modernize operations while earning recurring revenue. Training and support included."
        canonical="/partner-program"
      />
      <PageHeader
        title="Partner Program"
        subtitle="Join our network of partners helping schools across India modernize their operations. Earn revenue while making a difference in education."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner Program" },
        ]}
      />

      {/* CTA Buttons */}
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
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Who Can Partner With Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerTypes.map((type) => (
                <div key={type.title} className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-premium transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-heading-md font-bold text-foreground mb-2">{type.title}</h3>
                      <p className="text-body-md text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                What Partners Get
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card rounded-xl border border-border/50 p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                How to Get Started
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className="text-display-md font-bold text-primary/20 mb-2">{step.step}</div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-body-sm text-muted-foreground">
              GuruCool is offered directly to schools. We do not provide OEM or white-label licensing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
