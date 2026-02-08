import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Shield, Clock, Users, CheckCircle2, ArrowRight, Smartphone, Building2, GraduationCap, BookOpen, FileText, Bell, BarChart3, Settings, Lock, Globe, Zap, CreditCard, MapPin, Fingerprint, Video } from "lucide-react";
import logo from "@/assets/gurucool-logo.png";
import { SEO, structuredData } from "@/components/SEO";
import { HeroDashboardPreview } from "@/components/HeroDashboardPreview";
const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20plans%20for%20our%20school.";

const features = [
  { icon: Shield, title: "QR + Face Attendance", description: "Secure gate entry with QR ID cards and optional face recognition" },
  { icon: Bell, title: "WhatsApp Alerts", description: "Instant attendance and updates delivered directly to parents" },
  { icon: BarChart3, title: "Smart Dashboards", description: "Role-based dashboards for Admin, Teachers, and Students" },
  { icon: Clock, title: "Timetable Generator", description: "Automated timetable creation with conflict detection" },
  { icon: BookOpen, title: "Exams & Reports", description: "Complete examination management with detailed report cards" },
  { icon: FileText, title: "Document Portal", description: "Streamlined document submission and verification" },
  { icon: Users, title: "Leave Management", description: "Staff leave tracking with proxy adjustments" },
  { icon: CreditCard, title: "Fees Module", description: "Payment portal with receipts and automated reminders" },
];

const integrations = [
  { icon: Video, title: "Video Conferencing", description: "Google Meet, Zoom integration" },
  { icon: CreditCard, title: "Payment Gateway", description: "Secure online fee collection" },
  { icon: MapPin, title: "GPS Tracking", description: "School bus tracking" },
  { icon: Fingerprint, title: "Biometric Devices", description: "Hardware integration" },
];

const faqs = [
  { q: "What is GuruCool?", a: "GuruCool is a smart school management system designed specifically for Indian schools. It combines QR-based attendance, WhatsApp communication, and comprehensive admin tools to help schools run smoothly from Day 1." },
  { q: "Do parents need to download an app?", a: "No. Parents receive all updates directly on WhatsApp, no separate app needed. This ensures near-100% message delivery." },
  { q: "Can we start with only attendance?", a: "Yes. Start with our Safety Core plan for attendance and core features, then add modules as your school grows." },
  { q: "Is training included?", a: "Yes. All plans include implementation support and training for your staff." },
  { q: "How do we get pricing?", a: "Contact us on WhatsApp or book a demo call. We'll understand your requirements and share a customized quote." },
];

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <SEO
        title="GuruCool | Smart School Management System for Indian Schools"
        description="QR + Face attendance, WhatsApp alerts, exams, fees, and dashboards. GuruCool helps Indian schools run smoothly from Day 1."
        canonical="/"
        structuredData={{
          ...structuredData.softwareApplication,
          ...structuredData.organization,
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
        {/* Subtle gradient blob behind visual */}
        <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-guru-blue/[0.06] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-guru-navy/[0.04] rounded-full blur-[80px]" />
        </div>

        {/* Faint logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={logo}
            alt=""
            className="w-[45vw] max-w-[500px] opacity-[0.025]"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-caption font-medium mb-6 animate-fade-in-up">
                <Shield className="w-3.5 h-3.5" />
                Smart School Management System
              </div>
              
              <h1 className="text-display-sm sm:text-display-md lg:text-display-lg font-bold text-foreground mb-4 animate-fade-in-up animation-delay-100">
                <span className="hero-text-gradient">GuruCool</span>
              </h1>
              
              <p className="text-heading-md sm:text-heading-lg lg:text-heading-xl font-semibold text-foreground mb-4 animate-fade-in-up animation-delay-100">
                Smart School Management,<br className="hidden sm:block" /> Built for Indian Schools
              </p>
              
              <p className="text-body-md sm:text-body-lg text-muted-foreground mb-6 max-w-[56ch] animate-fade-in-up animation-delay-200">
                Run your school properly from Day 1, reduce administrative workload, and move towards intelligent automation at your own pace.
              </p>
              
              <div className="flex items-center gap-3 text-body-sm text-primary font-medium mb-8 animate-fade-in-up animation-delay-200">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  QR + Face Attendance
                </span>
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Communication
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-3 mb-6 animate-fade-in-up animation-delay-300">
                <Button asChild size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 px-6">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Contact on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 px-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <Link to="/book-demo">
                    <Calendar className="w-5 h-5" />
                    Book a Demo
                  </Link>
                </Button>
              </div>

              <p className="text-body-sm text-muted-foreground animate-fade-in-up animation-delay-300">
                No parent apps needed. Parents get updates on WhatsApp.
              </p>
            </div>

            {/* Right Column - Product Preview Visual */}
            <div className="relative lg:pl-8 animate-fade-in-up animation-delay-200">
              <HeroDashboardPreview />
            </div>
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-body-sm font-medium">Built for Indian school operations</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-body-sm font-medium">WhatsApp-first communication</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Smartphone className="w-6 h-6 text-primary" />
              <span className="text-body-sm font-medium">QR/Face attendance-ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is GuruCool */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-sm font-bold text-foreground mb-6">
              What is GuruCool?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              GuruCool is a practical, no-nonsense school management system that addresses the real challenges Indian schools face daily. From tracking attendance accurately to keeping parents informed via WhatsApp, GuruCool simplifies operations so your staff can focus on education.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For Administration</h3>
                <p className="text-body-sm text-muted-foreground">Complete control over school operations</p>
              </div>
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For Teachers</h3>
                <p className="text-body-sm text-muted-foreground">Streamlined classroom management</p>
              </div>
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For Students</h3>
                <p className="text-body-sm text-muted-foreground">Easy access to schedules and results</p>
              </div>
              <div className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">For Parents</h3>
                <p className="text-body-sm text-muted-foreground">WhatsApp updates, no app needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-foreground mb-4">
              Key Outcomes
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Focus on what matters most for your school
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-guru-green/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-guru-green" />
              </div>
              <h3 className="text-heading-lg font-bold text-foreground mb-3">Attendance Accuracy & Safety</h3>
              <p className="text-body-md text-muted-foreground">
                QR-based gate attendance with instant WhatsApp alerts ensures parents know exactly when their child arrives and leaves.
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-guru-blue/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-guru-blue" />
              </div>
              <h3 className="text-heading-lg font-bold text-foreground mb-3">Faster Admin Operations</h3>
              <p className="text-body-md text-muted-foreground">
                Automate repetitive tasks like timetable creation, report generation, and fee reminders. Save hours every week.
              </p>
            </div>
            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-guru-orange/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-guru-orange" />
              </div>
              <h3 className="text-heading-lg font-bold text-foreground mb-3">Clear Parent Communication</h3>
              <p className="text-body-md text-muted-foreground">
                Deliver updates where parents actually read them — WhatsApp. No downloads, no login issues, near-100% delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="pill pill-success text-body-sm font-semibold">
              Limited Time: No Setup Cost
            </span>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-foreground mb-4">
              Three Plans. One System.
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Start with what you need today and scale as your school grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {/* Safety Core */}
            <div className="plan-card">
              <h3 className="text-heading-lg font-bold text-foreground mb-2">Safety Core</h3>
              <p className="text-body-sm text-muted-foreground mb-6">School runs properly from Day 1</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["QR + Face Attendance", "QR ID Cards", "WhatsApp Alerts: Attendance", "Homework & Classwork", "Basic Report Cards", "Unified Calendar"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full plan-card-btn">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Contact on WhatsApp
                </a>
              </Button>
            </div>

            {/* Academic Suite */}
            <div className="plan-card">
              <div className="plan-card-badge">
                <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-caption font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <h3 className="text-heading-lg font-bold text-foreground mb-2">Academic Suite</h3>
              <p className="text-body-sm text-muted-foreground mb-6">School runs smoothly, admin effort reduces</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Everything in Safety Core", "Exam Management", "Timetable Generator", "Fee Receipts & Reminders", "Leave Management", "Payroll Assistance"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full plan-card-btn">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Contact on WhatsApp
                </a>
              </Button>
            </div>

            {/* Flagship Plan */}
            <div className="plan-card">
              <h3 className="text-heading-lg font-bold text-foreground mb-2">Flagship Plan</h3>
              <p className="text-body-sm text-muted-foreground mb-6">School runs intelligently with automation</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Everything in Academic Suite", "Gamified Feedback", "Full Payroll System", "Advanced Analytics", "Question Paper Generator", "Multi-language Support"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full plan-card-btn">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/plans" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Compare all features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-foreground mb-4">
              Everything Your School Needs
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of tools designed for Indian school operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-body-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/features" className="gap-2">
                Explore All Features <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-foreground mb-4">
              Integrations
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Connect GuruCool with the tools you already use
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((item) => (
              <div key={item.title} className="card-premium p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-body-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/integrations" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              View all integrations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-School */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="pill pill-primary mb-4">For School Groups</span>
                <h2 className="text-display-sm font-bold text-foreground mb-6">
                  Multi-School Management
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6">
                  Running multiple campuses? GuruCool provides a unified dashboard to manage all your schools from one place. Consolidated analytics, role-based access by campus, and standardized operations across your network.
                </p>
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/multi-school">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Unified Dashboard</p>
                      <p className="text-body-sm text-muted-foreground">All schools in one view</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Consolidated Analytics</p>
                      <p className="text-body-sm text-muted-foreground">Cross-campus reporting</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Role-Based Access</p>
                      <p className="text-body-sm text-muted-foreground">Campus-level permissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-foreground rounded-2xl p-8 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4">
                      <Lock className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-body-sm font-medium">Role-Based Access</p>
                    </div>
                    <div className="text-center p-4">
                      <Shield className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-body-sm font-medium">Data Encryption</p>
                    </div>
                    <div className="text-center p-4">
                      <Globe className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-body-sm font-medium">Cloud or On-Premise</p>
                    </div>
                    <div className="text-center p-4">
                      <Settings className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-body-sm font-medium">Audit Logs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-display-sm font-bold text-foreground mb-6">
                  Security & Data Control
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6">
                  Your school's data security is our priority. GuruCool offers enterprise-grade security with role-based access control, complete audit trails, and the flexibility of cloud or on-premise deployment based on your requirements.
                </p>
                <ul className="space-y-3">
                  {["Role-based access control", "Complete audit logs", "Data encryption at rest and in transit", "Cloud or on-premise options", "Regular security updates"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-body-md text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl border border-border/50 p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-body-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/faq" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
