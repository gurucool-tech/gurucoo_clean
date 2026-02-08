import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Building2, Users, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20about%20case%20studies.";

const caseStudies = [
  {
    id: 1,
    title: "Urban CBSE School Improves Parent Communication",
    schoolType: "CBSE School",
    location: "Maharashtra",
    students: "1,200+",
    challenge: "Low parent app adoption (under 30%) meant most parents missed important updates.",
    solution: "Switched to WhatsApp-based communication for all parent notifications.",
    outcome: "Near-100% message delivery. Parents now receive attendance alerts, fee reminders, and announcements reliably.",
    slug: "cbse-school-communication",
  },
  {
    id: 2,
    title: "School Group Unifies Operations Across 3 Campuses",
    schoolType: "School Group",
    location: "Gujarat",
    students: "2,500+",
    challenge: "Three campuses operating independently with no consolidated view for management.",
    solution: "Implemented GuruCool's multi-school dashboard with unified reporting.",
    outcome: "Management now has real-time visibility across all campuses. Standardized processes without losing campus autonomy.",
    slug: "school-group-unified",
  },
  {
    id: 3,
    title: "State Board School Implements QR Attendance",
    schoolType: "State Board School",
    location: "Karnataka",
    students: "800+",
    challenge: "Manual attendance in registers was time-consuming and prone to errors.",
    solution: "Deployed QR-coded ID cards for gate and classroom attendance.",
    outcome: "Attendance marking time reduced significantly. Parents receive instant arrival alerts. Complete audit trail maintained.",
    slug: "state-board-qr-attendance",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Case Studies | GuruCool School Success Stories"
        description="Real examples of how Indian schools are using GuruCool to solve operational challenges with attendance, communication, and administration."
        canonical="/case-studies"
      />
      <PageHeader
        title="Case Studies"
        subtitle="Real examples of how schools are using GuruCool to solve operational challenges. Names anonymized for privacy."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />

      {/* Case Studies */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {caseStudies.map((study) => (
                <article key={study.id} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-caption text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      {study.schoolType}
                    </span>
                    <span className="flex items-center gap-1 text-caption text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1 text-caption text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {study.students} students
                    </span>
                  </div>
                  <h2 className="text-heading-xl font-bold text-foreground mb-4">{study.title}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-body-sm font-semibold text-foreground mb-1">Challenge</h3>
                      <p className="text-body-md text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-body-sm font-semibold text-foreground mb-1">Solution</h3>
                      <p className="text-body-md text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-body-sm font-semibold text-foreground mb-1">Outcome</h3>
                      <p className="text-body-md text-foreground">{study.outcome}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 p-8 bg-muted/30 rounded-xl text-center">
              <p className="text-body-md text-muted-foreground mb-4">
                These are representative examples. Specific details have been generalized to protect school privacy.
              </p>
              <Button asChild variant="outline" className="gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Request Detailed Case Studies
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
