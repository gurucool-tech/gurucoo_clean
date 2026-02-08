import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Heart, Target, Eye, Users, Briefcase } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20company.";

const team = [
  { role: "Founder & CEO", description: "Driving the vision of smart school management for Indian schools" },
  { role: "Head of Product", description: "Building features that solve real problems for schools" },
  { role: "Engineering Lead", description: "Ensuring reliability, security, and performance at scale" },
  { role: "School Success", description: "Helping schools get the most out of GuruCool" },
];

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="About GuruCool | Our Story"
        description="Learn why GuruCool was built and how we help Indian schools improve safety, communication, and daily operations."
        canonical="/about"
      />
      <PageHeader
        title="Our Story"
        subtitle="Why we built GuruCool and what drives us every day"
      />

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-body-lg text-muted-foreground mb-6">
                GuruCool was born from a simple observation: Indian schools struggle with basic operational challenges that shouldn't be this hard to solve.
              </p>
              <p className="text-body-lg text-muted-foreground mb-6">
                We saw schools manually tracking attendance in registers, parents anxious about whether their children reached school safely, and administrative staff buried in paperwork instead of focusing on education.
              </p>
              <p className="text-body-lg text-muted-foreground mb-6">
                We also noticed that while there were many school ERPs in the market, most were either too complex for regular schools or required parents to download yet another app — which rarely happened.
              </p>
              <p className="text-body-lg text-foreground font-medium mb-6">
                So we built GuruCool with a different approach:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-body-lg text-muted-foreground">
                  <span className="text-primary font-bold">1.</span>
                  Start with what matters most — attendance and safety
                </li>
                <li className="flex items-start gap-3 text-body-lg text-muted-foreground">
                  <span className="text-primary font-bold">2.</span>
                  Use WhatsApp for parent communication — no app downloads needed
                </li>
                <li className="flex items-start gap-3 text-body-lg text-muted-foreground">
                  <span className="text-primary font-bold">3.</span>
                  Let schools start simple and add features when they're ready
                </li>
              </ul>
              <p className="text-body-lg text-muted-foreground">
                Today, GuruCool helps schools across India run their operations more efficiently, keep parents informed, and focus on what truly matters — education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border/50 p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-heading-xl font-bold text-foreground mb-4">Vision</h2>
                <p className="text-body-lg text-muted-foreground">
                  Every school runs safely and smoothly with simple systems.
                </p>
              </div>
              <div className="bg-card rounded-xl border border-border/50 p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-heading-xl font-bold text-foreground mb-4">Mission</h2>
                <p className="text-body-lg text-muted-foreground">
                  Reduce manual administrative work and improve attendance and communication outcomes for Indian schools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Leadership
              </h2>
              <p className="text-body-lg text-muted-foreground">
                A team passionate about improving school operations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {team.map((member) => (
                <div key={member.role} className="bg-card rounded-xl border border-border/50 p-6">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{member.role}</h3>
                  <p className="text-body-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
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
                What We Believe
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-3">Simplicity First</h3>
                <p className="text-body-md text-muted-foreground">
                  Complex software doesn't help. We focus on making things simple and practical.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-3">Real Problems</h3>
                <p className="text-body-md text-muted-foreground">
                  We build features that solve actual challenges schools face, not imaginary ones.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-heading-lg font-bold text-foreground mb-3">Partner Mindset</h3>
                <p className="text-body-md text-muted-foreground">
                  We succeed when our schools succeed. Their growth is our growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
