import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Building2, BarChart3, Users, Settings, CheckCircle2, Shield } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20about%20multi-school%20management.";

const features = [
  { icon: BarChart3, title: "Unified Dashboard", description: "See all your schools at a glance. Monitor attendance, fees, and operations from a single consolidated view." },
  { icon: Users, title: "Campus-Wise Roles", description: "Assign administrators per campus while maintaining group-level oversight." },
  { icon: Settings, title: "Standardized Settings", description: "Apply common configurations across campuses or customize per school." },
  { icon: Shield, title: "Data Security", description: "Role-based access ensures each school only sees their own data." },
];

const capabilities = ["Consolidated attendance reports", "Comparative analytics between schools", "Centralized user management", "Group-level announcements", "Campus-specific customizations", "Unified fee tracking", "Cross-campus staff assignments", "Standardized report formats"];

export default function MultiSchoolPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Multi-School Management | GuruCool for School Groups"
        description="Manage multiple school campuses from one dashboard. Consolidated analytics, role-based access, and standardized operations for school trusts."
        canonical="/multi-school"
      />
      <PageHeader 
        title="Multi-School Management" 
        subtitle="For school groups, trusts, and education societies. Manage multiple campuses from a unified dashboard while giving each school the autonomy to operate independently." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Multi-School" }]} 
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

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Centralized Control, Distributed Operations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-body-md text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-sm font-bold text-foreground mb-6">What You Can Do</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                      <span className="text-body-md text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="w-12 h-12 text-primary" />
                  <div>
                    <h3 className="text-heading-lg font-bold text-foreground">Group Dashboard</h3>
                    <p className="text-body-sm text-muted-foreground">Everything at a glance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-body-sm font-medium text-foreground">Campus A</span>
                      <span className="text-body-sm text-guru-green">Active</span>
                    </div>
                    <div className="text-caption text-muted-foreground">1,200 students • 85 staff</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-body-sm font-medium text-foreground">Campus B</span>
                      <span className="text-body-sm text-guru-green">Active</span>
                    </div>
                    <div className="text-caption text-muted-foreground">800 students • 52 staff</div>
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
