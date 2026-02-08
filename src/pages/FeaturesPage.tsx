import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, CheckCircle2, Users, ArrowRight, Shield, Clock, BookOpen, FileText, Bell, BarChart3, CreditCard, Fingerprint, Settings, Calendar, MessageCircle, GraduationCap, Smartphone, Globe, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20features.";

interface Module {
  name: string;
  description: string;
  forWhom: string;
  capabilities: string[];
  icon: React.ElementType;
}

const coreModules: Module[] = [
  {
    name: "QR ID Cards",
    description: "Generate and manage unique QR-coded ID cards for every student and staff member.",
    forWhom: "Administration",
    capabilities: ["Unique QR code per student", "Photo ID integration", "Batch printing support", "Lost card replacement", "Staff ID cards"],
    icon: Shield,
  },
  {
    name: "QR Attendance (Gate/Class)",
    description: "Secure attendance tracking at school gates and classrooms with complete audit trails.",
    forWhom: "Administration, Teachers",
    capabilities: ["Gate entry/exit tracking", "Classroom attendance", "Real-time sync", "Audit logs", "Late arrival tracking"],
    icon: Clock,
  },
  {
    name: "WhatsApp Attendance Alerts",
    description: "Instant notifications to parents when their child arrives or leaves school.",
    forWhom: "Parents",
    capabilities: ["Instant arrival alerts", "Departure notifications", "Photo with timestamp", "Customizable messages", "No app required"],
    icon: Bell,
  },
  {
    name: "Dashboards",
    description: "Role-based dashboards for admins, teachers, and students with relevant insights.",
    forWhom: "All Users",
    capabilities: ["Admin overview", "Teacher dashboard", "Student portal", "Real-time data", "Custom widgets"],
    icon: BarChart3,
  },
  {
    name: "Timetable Generator",
    description: "Automated timetable creation with conflict detection and optimization.",
    forWhom: "Administration",
    capabilities: ["Auto-generation", "Conflict detection", "Teacher allocation", "Room management", "Export options"],
    icon: Calendar,
  },
  {
    name: "Basic Exams & Results",
    description: "Manage examinations and publish results with basic analytics.",
    forWhom: "Teachers, Students",
    capabilities: ["Exam scheduling", "Mark entry", "Result publishing", "Basic reports", "Grade calculation"],
    icon: BookOpen,
  },
  {
    name: "Basic Report Cards",
    description: "Generate and distribute standardized report cards for all students.",
    forWhom: "Teachers, Parents",
    capabilities: ["Template-based cards", "Auto-calculation", "Print-ready format", "Parent distribution", "Archive access"],
    icon: FileText,
  },
  {
    name: "Homework/Classwork",
    description: "Assign and track homework and classwork with basic submission tracking.",
    forWhom: "Teachers, Students",
    capabilities: ["Assignment creation", "Due date tracking", "Basic submissions", "Class-wise view", "Notification support"],
    icon: GraduationCap,
  },
  {
    name: "Calendar",
    description: "School-wide calendar for holidays, exams, and events.",
    forWhom: "All Users",
    capabilities: ["Holiday management", "Exam schedules", "Event planning", "Academic calendar", "Sync support"],
    icon: Calendar,
  },
  {
    name: "User Roles & Permissions",
    description: "Granular access control based on user roles and responsibilities.",
    forWhom: "Administration",
    capabilities: ["Role definition", "Permission sets", "Access control", "Audit trails", "Multi-level hierarchy"],
    icon: Settings,
  },
  {
    name: "Basic Fee Status",
    description: "View paid/unpaid fee status for students with basic reporting.",
    forWhom: "Administration, Parents",
    capabilities: ["Fee status view", "Pending alerts", "Basic reports", "Student-wise tracking", "Class summaries"],
    icon: CreditCard,
  },
];

const professionalModules: Module[] = [
  {
    name: "Full Examination Management",
    description: "Comprehensive exam management with schedules, hall tickets, and attendance sheets.",
    forWhom: "Administration, Teachers",
    capabilities: ["Exam scheduling", "Hall ticket generation", "Seating arrangements", "Attendance sheets", "Result analysis"],
    icon: BookOpen,
  },
  {
    name: "Feedback & Analytics",
    description: "Detailed feedback system with graphs, remarks, and performance evaluation.",
    forWhom: "Teachers, Students",
    capabilities: ["Remarks evaluation", "Performance graphs", "Trend analysis", "Comparative reports", "Parent feedback"],
    icon: BarChart3,
  },
  {
    name: "Advanced Reports",
    description: "Detailed reports for students and teachers with multiple formats.",
    forWhom: "Administration, Teachers",
    capabilities: ["Custom report builder", "Multiple formats", "Scheduled reports", "Email delivery", "Data export"],
    icon: FileText,
  },
  {
    name: "Document Submission Portal",
    description: "Streamlined document collection and verification for admissions and records.",
    forWhom: "Administration, Parents",
    capabilities: ["Online submission", "Document verification", "Status tracking", "Reminder system", "Archive management"],
    icon: FileText,
  },
  {
    name: "Leave Management",
    description: "Staff and student leave tracking with proxy and substitute adjustments.",
    forWhom: "Administration, Teachers",
    capabilities: ["Leave applications", "Approval workflow", "Proxy assignment", "Balance tracking", "Calendar integration"],
    icon: Calendar,
  },
  {
    name: "Teacher Allotment",
    description: "Manage teacher allocation across classes and subjects efficiently.",
    forWhom: "Administration",
    capabilities: ["Subject allocation", "Workload balancing", "Conflict resolution", "History tracking", "Reallocation support"],
    icon: Users,
  },
  {
    name: "Gamified Portals",
    description: "Engage students with points, stars, and ratings for achievements.",
    forWhom: "Students, Teachers",
    capabilities: ["Points system", "Star ratings", "Leaderboards", "Achievement badges", "Reward tracking"],
    icon: Zap,
  },
  {
    name: "Advanced WhatsApp Templates",
    description: "Customizable message templates for various school communications.",
    forWhom: "Administration",
    capabilities: ["Template library", "Variable support", "Bulk messaging", "Schedule delivery", "Delivery tracking"],
    icon: MessageCircle,
  },
];

const premiumModules: Module[] = [
  {
    name: "Face Recognition Attendance",
    description: "Optional biometric attendance using facial recognition technology.",
    forWhom: "Administration",
    capabilities: ["Contactless attendance", "Anti-spoofing", "Multi-face detection", "Offline support", "Integration with QR"],
    icon: Fingerprint,
  },
  {
    name: "Fees Payment Portal",
    description: "Complete fee management with online payments, receipts, and reminders.",
    forWhom: "Administration, Parents",
    capabilities: ["Online payments", "Receipt generation", "Payment reminders", "Installment plans", "Fee concessions"],
    icon: CreditCard,
  },
  {
    name: "Advanced Analytics",
    description: "Deep insights into attendance patterns, usage, and performance trends.",
    forWhom: "Administration",
    capabilities: ["Attendance analytics", "Usage patterns", "Performance trends", "Predictive insights", "Custom dashboards"],
    icon: BarChart3,
  },
  {
    name: "Multi-language Support",
    description: "Full system translation in regional languages for broader accessibility.",
    forWhom: "All Users",
    capabilities: ["Regional languages", "Dynamic switching", "Custom translations", "RTL support", "Parent portal localization"],
    icon: Globe,
  },
  {
    name: "ReadCycle (Book Exchange)",
    description: "Facilitate book sharing and exchange among students.",
    forWhom: "Students, Administration",
    capabilities: ["Book listings", "Exchange requests", "Tracking system", "Condition ratings", "Library integration"],
    icon: BookOpen,
  },
  {
    name: "Question Paper Generator",
    description: "AI-assisted question paper creation from question banks.",
    forWhom: "Teachers",
    capabilities: ["Question bank", "Pattern-based generation", "Difficulty levels", "Subject mapping", "Previous paper access"],
    icon: FileText,
  },
  {
    name: "Custom Development",
    description: "Tailored features and workflows for enterprise requirements.",
    forWhom: "Enterprise Schools",
    capabilities: ["Custom modules", "API integrations", "Workflow automation", "Dedicated support", "Priority updates"],
    icon: Settings,
  },
];

const addOnModules: Module[] = [
  {
    name: "Multi-School Dashboard",
    description: "Unified management console for school groups and trusts.",
    forWhom: "School Groups",
    capabilities: ["Consolidated view", "Cross-campus analytics", "Centralized settings", "Role-based access", "Comparative reports"],
    icon: BarChart3,
  },
  {
    name: "Integrations Hub",
    description: "Connect with third-party tools and services.",
    forWhom: "Administration",
    capabilities: ["Payment gateways", "Video conferencing", "GPS tracking", "Biometric devices", "SMS services"],
    icon: Zap,
  },
  {
    name: "API Access",
    description: "Developer access for custom integrations and data sync.",
    forWhom: "Developers",
    capabilities: ["RESTful API", "Webhook support", "OAuth authentication", "Rate limiting", "Documentation"],
    icon: Settings,
  },
];

function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/20 hover:shadow-premium transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <module.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{module.name}</h3>
          <p className="text-body-sm text-muted-foreground mb-3">{module.description}</p>
          <p className="text-caption text-primary font-medium mb-3">For: {module.forWhom}</p>
          <ul className="space-y-1">
            {module.capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-body-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterModules = (modules: Module[]) => {
    if (!searchQuery) return modules;
    const query = searchQuery.toLowerCase();
    return modules.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.capabilities.some((c) => c.toLowerCase().includes(query))
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Feature Tour | Modules in GuruCool School ERP"
        description="Explore GuruCool modules for attendance, exams, timetables, fees, leaves, communication, analytics, and more—built for Indian schools."
        canonical="/features"
      />
      <PageHeader
        title="Feature Tour"
        subtitle="Explore the complete set of modules that make GuruCool the most comprehensive school management system for Indian schools."
      />

      {/* Search */}
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 h-14 text-base bg-card rounded-xl border-border/60 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-muted">
              <TabsTrigger value="core" className="text-body-sm">Safety Core</TabsTrigger>
              <TabsTrigger value="professional" className="text-body-sm">Academic Suite</TabsTrigger>
              <TabsTrigger value="premium" className="text-body-sm">Flagship</TabsTrigger>
              <TabsTrigger value="addons" className="text-body-sm">Add-ons</TabsTrigger>
            </TabsList>

            <TabsContent value="core">
              <div className="mb-8">
                <h2 className="text-heading-xl font-bold text-foreground mb-2">Safety Core Modules</h2>
                <p className="text-body-md text-muted-foreground">Essential features to run your school properly from Day 1.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filterModules(coreModules).map((module) => (
                  <ModuleCard key={module.name} module={module} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professional">
              <div className="mb-8">
                <h2 className="text-heading-xl font-bold text-foreground mb-2">Academic Suite Modules</h2>
                <p className="text-body-md text-muted-foreground">Advanced features to run your school smoothly with reduced admin effort.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filterModules(professionalModules).map((module) => (
                  <ModuleCard key={module.name} module={module} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="premium">
              <div className="mb-8">
                <h2 className="text-heading-xl font-bold text-foreground mb-2">Flagship Plan Modules</h2>
                <p className="text-body-md text-muted-foreground">Intelligent features for schools ready to scale with full automation.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filterModules(premiumModules).map((module) => (
                  <ModuleCard key={module.name} module={module} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="addons">
              <div className="mb-8">
                <h2 className="text-heading-xl font-bold text-foreground mb-2">Add-on Modules</h2>
                <p className="text-body-md text-muted-foreground">Additional capabilities for specific needs and integrations.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filterModules(addOnModules).map((module) => (
                  <ModuleCard key={module.name} module={module} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
