import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Zap, MapPin, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const APPLY_FORM_LINK = "https://forms.gle/XR7p3yEcvzdZzZms9";
const WHATSAPP_LINK =
  "https://wa.me/918692072767?text=Hello%20Team%20GuruCool%2C%20I%20am%20interested%20in%20career%20opportunities.";

const openRoles = [
  {
    title: "Sales Executive - Education",
    type: "Commission-based",
    location: "Remote / Pan-India",
    description: "Build relationships with schools and demonstrate how GuruCool can solve their challenges.",
    compensation: "5% regular commission (commission-based work)",
    requirements: [
      "Experience in B2B sales (education preferred)",
      "Strong presentation and communication skills",
      "Self-motivated and target-driven",
      "Understanding of Indian school ecosystem",
    ],
    whatsappRole: "Sales Executive - Education (Commission-based, 5% regular commission)",
  },
  {
    title: "Full-Stack Developer Intern",
    type: "Internship",
    location: "Remote",
    description: "Build and improve features that help schools run better. Work on frontend and backend with guidance.",
    requirements: [
      "Familiarity with React / TypeScript (or strong JS)",
      "Basics of Node.js and databases",
      "Willingness to learn and ship improvements",
      "Can work independently with weekly check-ins",
    ],
    whatsappRole: "Full-Stack Developer Intern",
  },
];

const culture = [
  {
    icon: Heart,
    title: "Purpose-Driven",
    description:
      "We're here to make schools better. Every feature we build impacts thousands of students and teachers.",
  },
  {
    icon: Users,
    title: "Small Team, Big Impact",
    description: "We're a lean team where everyone's contribution matters. No bureaucracy, just impact.",
  },
  {
    icon: Zap,
    title: "Move Fast, Learn Faster",
    description: "We ship quickly, learn from feedback, and iterate. Perfect is the enemy of good.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Careers | Join GuruCool"
        description="Work with GuruCool to improve Indian school operations. Open roles in education sales and full-stack development internship."
        canonical="/careers"
      />
      <PageHeader
        title="Join Our Team"
        subtitle="Help us make schools across India run better. We're looking for passionate people who care about education."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Careers" }]}
      />

      {/* Culture */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Our Culture</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {culture.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-body-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Open Positions</h2>
            </div>

            <div className="space-y-6">
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-heading-lg font-bold text-foreground">{role.title}</h3>
                    <span className="pill pill-primary">{role.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-body-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    {role.location}
                  </div>
                  <p className="text-body-md text-muted-foreground mb-4">{role.description}</p>
                  {role.compensation && (
                    <p className="text-body-sm font-semibold text-primary mb-4">Compensation: {role.compensation}</p>
                  )}
                  <div className="mb-6">
                    <h4 className="text-body-sm font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {role.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-body-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="gap-2">
                    <a href={APPLY_FORM_LINK} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Apply Now
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
