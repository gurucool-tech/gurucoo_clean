import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Eye, Target, Heart } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20company.";

const values = [
  {
    icon: Heart,
    title: "Simplicity First",
    description: "Complex software doesn't help schools. We focus on making things simple and practical.",
  },
  {
    icon: Target,
    title: "Real Problems",
    description: "We build features that solve actual challenges schools face, not imaginary ones.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden costs, no surprise charges. What you see is what you get.",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Vision & Mission | GuruCool"
        description="Our vision and mission: make school operations reliable, simple, and scalable for Indian schools."
        canonical="/vision-mission"
      />
      <PageHeader
        title="Vision & Mission"
        subtitle="What drives us every day"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border/50 p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-heading-xl font-bold text-foreground mb-4">Vision</h2>
                <p className="text-body-lg text-muted-foreground">
                  Every school in India runs safely and smoothly with simple, practical systems.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-heading-xl font-bold text-foreground mb-4">Mission</h2>
                <p className="text-body-lg text-muted-foreground">
                  Reduce manual administrative work and improve attendance accuracy and parent communication for schools of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-heading-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-body-md text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-sm font-bold text-foreground mb-8 text-center">
              What We Believe
            </h2>
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                We believe that school software should solve real problems, not create new ones. Most schools struggle with basic operations — accurate attendance, effective parent communication, and simple administration. These aren't glamorous problems, but they matter every single day.
              </p>
              <p>
                We believe that parents shouldn't need to download another app. WhatsApp works. Let's use it.
              </p>
              <p>
                We believe that schools should start simple and add complexity only when they're ready. A staged approach leads to better adoption and outcomes.
              </p>
              <p>
                We believe in being honest about what we can and cannot do. We're not trying to be everything for everyone. We're trying to be really good at the things that matter most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
