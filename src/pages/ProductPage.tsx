import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MessageCircle, Users, BarChart3, Building2, CheckCircle2, Smartphone, GraduationCap, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTARow } from "@/components/layout/SectionContainer";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20product.";

const builtFor = [
  {
    icon: Building2,
    title: "Administration & Management",
    description: "Complete control over school operations with dashboards, reports, and analytics that give you real-time visibility.",
    features: ["Real-time attendance tracking", "Fee collection status", "Staff management", "Analytics dashboard"],
  },
  {
    icon: GraduationCap,
    title: "Teachers",
    description: "Streamlined tools for classroom management, attendance, exams, and student performance tracking.",
    features: ["Easy attendance marking", "Exam management", "Report card generation", "Leave applications"],
  },
  {
    icon: BookOpen,
    title: "Students",
    description: "Access schedules, assignments, results, and school communications in one place.",
    features: ["Timetable access", "Assignment tracking", "Result viewing", "Event calendar"],
  },
  {
    icon: Users,
    title: "Parents",
    description: "Stay informed about your child's attendance, academics, and school updates via WhatsApp. No app needed.",
    features: ["WhatsApp attendance alerts", "Fee reminders", "Exam updates", "School announcements"],
  },
];

const deploymentSteps = [
  {
    step: "01",
    title: "Demo & Requirement Mapping",
    description: "We understand your school's specific needs, existing processes, and goals through a detailed demo session.",
  },
  {
    step: "02",
    title: "Setup (Free Setup)",
    description: "Our team configures GuruCool for your school — classes, sections, subjects, staff, and students. No setup cost.",
  },
  {
    step: "03",
    title: "Training",
    description: "Comprehensive training for admin staff and teachers. We ensure everyone is comfortable before going live.",
  },
  {
    step: "04",
    title: "Go-Live & Support",
    description: "Launch with confidence. Our team provides dedicated support during the initial weeks and beyond.",
  },
];

export default function ProductPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Product Overview | GuruCool School Management System"
        description="A practical school ERP for Indian schools: attendance automation, WhatsApp communication, academics, exams, and admin dashboards."
        canonical="/product"
      />
      <PageHeader
        title="Product Overview"
        subtitle="GuruCool is a practical, no-nonsense school management system designed specifically for Indian schools. We address the real challenges schools face daily — from accurate attendance to effective parent communication."
      />

      {/* CTA Buttons */}
      <CTARow>
        <Button asChild size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp-hover">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="gap-2">
          <Link to="/features">
            Explore Features <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CTARow>

      {/* What makes GuruCool different */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                What Makes GuruCool Different
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                Built from the ground up for Indian school operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-card rounded-xl border border-border/50 p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px]">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Shield className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight mb-3">
                  QR + Face Attendance
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Secure gate attendance with QR ID cards and optional face recognition. Know exactly when every student arrives.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-card rounded-xl border border-border/50 p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px]">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight mb-3">
                  WhatsApp-First
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Parents get updates where they already are — WhatsApp. No app downloads, no login issues, near-100% delivery.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-card rounded-xl border border-border/50 p-6 lg:p-8 flex flex-col items-center text-center min-h-[280px]">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <BarChart3 className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-tight mb-3">
                  Staged Rollout
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Start simple with attendance and core features. Add modules as your school grows. No overwhelming complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Built For Everyone in Your School
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {builtFor.map((item) => (
                <div key={item.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-heading-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-body-md text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-body-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="pill pill-success mb-4">Free Setup</span>
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                How Deployment Works
              </h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                We make the transition simple and stress-free
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deploymentSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="text-display-lg font-bold text-primary/10 mb-2">{step.step}</div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{step.description}</p>
                  {index < deploymentSteps.length - 1 && (
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

      {/* Mobile Access Note */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-display-sm font-bold text-foreground mb-4">
                  Mobile-First Access
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6">
                  Admins and teachers can access GuruCool from any device — desktop, tablet, or phone. The responsive design ensures a seamless experience everywhere.
                </p>
                <p className="text-body-md text-foreground font-medium">
                  Parents receive updates on WhatsApp — no separate app needed.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-guru-green" />
                    <span className="text-body-md text-foreground">Responsive web dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-guru-green" />
                    <span className="text-body-md text-foreground">Works on any browser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-guru-green" />
                    <span className="text-body-md text-foreground">WhatsApp for parent updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-guru-green" />
                    <span className="text-body-md text-foreground">No app downloads required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
