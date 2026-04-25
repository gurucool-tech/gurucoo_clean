import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20structural%20walkthrough.";

export default function BookDemoPage() {
  return (
    <>
      <SEO
        title="Book a Structural Walkthrough | GuruCool"
        description="See how GuruCool fits your institution's workflow. Book a demo today."
        canonicalPath="/book-demo"
      />
      <PageHeader
        title="Book a Structural Walkthrough"
        description="Let's map GuruCool to your institution's actual operations."
      />

      <SectionContainer>
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Column: Trust and Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">What this walkthrough covers</h2>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">A live look at the identity, finance, and academic workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">A discussion on staged rollout and how to avoid change fatigue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Pricing mapping based on your institution's operational maturity.</span>
                </li>
              </ul>

              <div className="bg-muted/30 border border-border p-6 mb-10">
                <h3 className="font-bold mb-2">Who should attend?</h3>
                <p className="text-sm text-muted-foreground mb-4">This session is designed for Principals, Directors, Trustees, and Head Administrators who make operational decisions.</p>

                <h3 className="font-bold mb-2">What happens after?</h3>
                <p className="text-sm text-muted-foreground">We will share a customized rollout timeline and a clear pricing proposal. No aggressive follow-ups.</p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground mb-4">Prefer to talk right now?</p>
                <Button asChild variant="outline" className="gap-2 bg-whatsapp/10 border-whatsapp/20 text-whatsapp-hover hover:bg-whatsapp hover:text-white transition-colors">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Connect on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-card border border-border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Schedule your session</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Lokesh" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Rahul" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institutionName">Institution Name</Label>
                  <Input id="institutionName" placeholder="Your School or College" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="rahul@institution.edu" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91" className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What is your biggest operational challenge right now? (Optional)</Label>
                  <Textarea id="message" rows={4} className="bg-background" placeholder="e.g. Fee collection tracking is completely manual..." />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                  Request Walkthrough
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
