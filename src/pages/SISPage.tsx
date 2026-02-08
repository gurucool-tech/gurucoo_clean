import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Users, FileText, GraduationCap, Shield, Clock, CheckCircle2, BookOpen, Calendar } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20about%20the%20Student%20Information%20System.";

const modules = [
  { icon: Users, title: "Admissions Management", description: "Streamlined admission process from inquiry to enrollment", features: ["Online inquiry forms", "Document collection", "Seat allocation", "Admission workflow"] },
  { icon: FileText, title: "Student Profiles", description: "Comprehensive student records in one place", features: ["Personal details", "Parent/guardian info", "Medical records", "Previous school history"] },
  { icon: Clock, title: "Attendance Tracking", description: "QR and face recognition based attendance", features: ["Gate attendance", "Classroom attendance", "Leave management", "Attendance reports"] },
  { icon: BookOpen, title: "Exams & Results", description: "Complete examination lifecycle management", features: ["Exam scheduling", "Mark entry", "Grade calculation", "Report card generation"] },
  { icon: Calendar, title: "Academic Records", description: "Historical academic data for every student", features: ["Year-wise performance", "Promotion history", "Transfer certificates", "Character certificates"] },
  { icon: Shield, title: "Security & Access", description: "Role-based access to sensitive information", features: ["Data privacy controls", "Audit trails", "Parent portal access", "Staff permissions"] },
];

const benefits = ["Single source of truth for all student data", "Reduce paperwork and manual errors", "Quick access to any student's history", "Seamless data flow between modules", "Compliant record-keeping", "Easy transfer certificate generation"];

export default function SISPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Student Information System | GuruCool SIS"
        description="Comprehensive student information system for Indian schools. Manage admissions, profiles, attendance, exams, and academic records in one place."
        canonical="/sis"
      />
      <PageHeader 
        title="Student Information System" 
        subtitle="A comprehensive system to manage the complete student lifecycle — from admission to graduation. All student data, linked and accessible." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Student Information System" }]} 
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

      {/* Modules Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Complete Student Data Management</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <div key={module.title} className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-premium transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{module.title}</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-sm font-bold text-foreground mb-6">Why Use a Proper SIS?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="w-12 h-12 text-primary" />
                  <div>
                    <h3 className="text-heading-lg font-bold text-foreground">Student Profile</h3>
                    <p className="text-body-sm text-muted-foreground">Complete view</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-body-sm font-medium text-foreground mb-1">Personal Details</div>
                    <div className="text-caption text-muted-foreground">Name, DOB, Address, Photo</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-body-sm font-medium text-foreground mb-1">Attendance</div>
                    <div className="text-caption text-muted-foreground">92% this month • 3 leaves</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-body-sm font-medium text-foreground mb-1">Fee Status</div>
                    <div className="text-caption text-guru-green">All dues cleared</div>
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
