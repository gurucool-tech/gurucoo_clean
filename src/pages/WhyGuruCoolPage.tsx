import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Clock, Bell, BookOpen, BarChart3, Building2, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20why%20schools%20choose%20you.";

const reasonCategories = [
  { icon: Shield, title: "Attendance & Safety", reasons: ["QR-based ID cards eliminate proxy attendance", "Gate entry/exit tracking with timestamps", "Instant WhatsApp alerts when child arrives", "Photo verification with attendance", "Optional face recognition for higher security", "Complete audit trail of all attendance records", "Late arrival tracking and reporting"] },
  { icon: Clock, title: "Admin Efficiency", reasons: ["Automated timetable generation", "Digital fee status tracking", "Streamlined admission process", "Leave management with approvals", "Document submission portal", "Role-based access control", "Centralized data management"] },
  { icon: Bell, title: "Communication", reasons: ["WhatsApp-first parent communication", "No app downloads for parents", "Near-100% message delivery rate", "Automated fee reminders", "Exam schedule notifications", "School announcements reach everyone", "Customizable message templates"] },
  { icon: BookOpen, title: "Exams & Academics", reasons: ["Exam scheduling and management", "Mark entry with validation", "Automatic grade calculation", "Report card generation", "Performance tracking over time", "Subject-wise analytics", "Previous year comparisons"] },
  { icon: BarChart3, title: "Data & Control", reasons: ["All student data in one place", "Historical records preserved", "Custom reports and exports", "Dashboard for quick insights", "Class-wise and section-wise views", "Trend analysis and patterns", "Compliance-ready record keeping"] },
  { icon: Building2, title: "Scalability", reasons: ["Start with attendance, add modules later", "No overwhelming feature overload", "Multi-school support for groups", "Grows with your school", "Upgrade plans without data loss", "Free setup and training", "Dedicated support team"] },
];

export default function WhyGuruCoolPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Why GuruCool | Built for Indian School Operations"
        description="Why schools choose GuruCool: accurate attendance, WhatsApp communication, staged rollout, and tools that reduce admin effort."
        canonical="/why-gurucool"
      />
      <PageHeader 
        title="Why Schools Choose GuruCool" 
        subtitle="Practical reasons grouped by what matters most to schools. No hype, just facts about how GuruCool helps." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Why GuruCool" }]} 
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

      {/* Reasons Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {reasonCategories.map((category) => (
                <div key={category.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-heading-lg font-bold text-foreground">{category.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                        <span className="text-body-md text-foreground">{reason}</span>
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
