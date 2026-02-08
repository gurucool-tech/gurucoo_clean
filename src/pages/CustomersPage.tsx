import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Building2, Quote } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20about%20your%20customers.";

const testimonials = [
  {
    quote: "The WhatsApp attendance alerts have been a game changer. Parents actually receive and read the messages now.",
    role: "School Administrator",
    schoolType: "CBSE School, Maharashtra",
  },
  {
    quote: "We started with just attendance and gradually added more modules. The staged approach really worked for us.",
    role: "Principal",
    schoolType: "State Board School, Karnataka",
  },
  {
    quote: "Managing three campuses from one dashboard has simplified our operations significantly.",
    role: "Trust Administrator",
    schoolType: "School Group, Gujarat",
  },
];

const schoolTypes = [
  { type: "CBSE Schools", icon: Building2 },
  { type: "State Board Schools", icon: Building2 },
  { type: "ICSE Schools", icon: Building2 },
  { type: "International Schools", icon: Building2 },
  { type: "School Groups & Trusts", icon: Building2 },
  { type: "Play Schools & Pre-Primary", icon: Building2 },
];

export default function CustomersPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Customers | Schools Using GuruCool"
        description="Schools using GuruCool to improve attendance accuracy, parent communication, and administrative efficiency."
        canonical="/customers"
      />
      <PageHeader
        title="Our Customers"
        subtitle="Schools across India trust GuruCool for their daily operations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Customers" },
        ]}
      />

      {/* School Types */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Schools We Serve
              </h2>
              <p className="text-body-lg text-muted-foreground">
                GuruCool works with schools of all types and sizes
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {schoolTypes.map((school) => (
                <div key={school.type} className="bg-card rounded-xl border border-border/50 p-6 text-center hover:shadow-premium transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <school.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground">{school.type}</h3>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-xl text-center">
              <p className="text-body-md text-muted-foreground">
                School logos and names available upon request. We respect our customers' privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                What Schools Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-xl border border-border/50 p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-body-md text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">{testimonial.role}</p>
                    <p className="text-caption text-muted-foreground">{testimonial.schoolType}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-body-sm text-muted-foreground">
                Names and specific details anonymized for privacy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
