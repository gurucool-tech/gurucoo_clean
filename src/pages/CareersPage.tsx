import { Button } from "@/components/ui/button";
import { ArrowUpRight, Braces, Check, ExternalLink, Heart, PenTool, Sparkles, Users, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";
import "./CareersPage.css";

const APPLY_FORM_LINK = "https://forms.gle/XR7p3yEcvzdZzZms9";

const openRoles = [
  {
    index: "01",
    title: "Full-Stack Developer Intern",
    type: "Internship",
    location: "Remote",
    icon: Braces,
    variant: "engineering",
    description: "Work on real GuruCool product features while learning how frontend, backend, APIs, data, and workflows come together.",
    requirements: [
      "Familiarity with JavaScript, React, TypeScript, and Node.js",
      "Basic understanding of APIs, databases, and web applications",
      "Strong problem-solving and learning mindset",
      "Willingness to explore unfamiliar technologies when needed",
      "Ability to understand a problem before rushing to finish it",
    ],
    supporting: "You do not need senior-level expertise. We care more about how quickly you learn, how you think, and how well you apply what you learn.",
  },
  {
    index: "02",
    title: "UI/UX Designer Intern",
    type: "Internship",
    location: "Remote",
    icon: PenTool,
    variant: "design",
    description: "Design clear and thoughtful product experiences across GuruCool interfaces, workflows, dashboards, and user journeys.",
    requirements: [
      "Familiarity with Figma, Canva, Adobe Creative Cloud tools, or similar design software",
      "Basic understanding of UI/UX principles",
      "Good sense of typography, spacing, hierarchy, and composition",
      "Ability to understand a workflow before designing it",
      "Willingness to learn, take feedback, and iterate",
    ],
    supporting: "You are not expected to code. Your focus is understanding the problem and designing a clear experience. The development team will handle implementation.",
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
    description: "We ship thoughtfully, learn from feedback, and improve through iteration.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Careers | Join GuruCool"
        description="Learn and build with GuruCool through real product work. Explore open full-stack development and UI/UX design internships."
        canonical="/careers"
      />
      <PageHeader
        variant="warm"
        title="Join Our Team"
        subtitle="Help us make schools across India run better. We're looking for passionate people who care about education."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Careers" }]}
      />

      {/* Culture */}
      <section className="careers-stage section-padding bg-background">
        <div className="site-canvas">
          <div className="max-w-6xl mr-auto">
            <div className="careers-stage__intro">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Our Culture</h2>
            </div>

            <div className="careers-stage__grid">
              {culture.map((item, index) => (
                <div key={item.title} className={`culture-panel ${index === 0 ? "culture-panel--lead" : ""}`}>
                  <div className="culture-panel__icon">
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

      {/* Philosophy */}
      <section className="careers-philosophy" aria-labelledby="careers-philosophy-title">
        <div className="site-canvas">
          <div className="careers-philosophy__layout">
            <div className="careers-philosophy__label">
              <span aria-hidden="true">03</span>
              <p>Our Philosophy</p>
            </div>

            <div className="careers-philosophy__statement">
              <Sparkles aria-hidden="true" />
              <h2 id="careers-philosophy-title">Learn with us. Build with us.</h2>
              <p className="careers-philosophy__lead">
                We do not expect you to know everything before you join. Technology changes too quickly for that.
              </p>
              <div className="careers-philosophy__copy">
                <p>
                  What matters to us is how you think, how quickly you learn, and how well you apply what you learn. You may come across tools, systems, or problems you have never worked with before, and that is okay.
                </p>
                <p>
                  We are building and evolving too. Learn through the work, understand the problem properly, ask the right questions, and grow with every project.
                </p>
              </div>
            </div>

            <aside className="careers-philosophy__principle" aria-label="Our learning principle">
              <span>Knowledge gaps are okay.</span>
              <strong>A poor learning mindset is not.</strong>
              <ArrowUpRight aria-hidden="true" />
            </aside>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="careers-positions" aria-labelledby="careers-positions-title">
        <div className="site-canvas">
          <div className="careers-positions__heading">
            <div>
              <span>Current opportunities</span>
              <h2 id="careers-positions-title">Open Positions</h2>
            </div>
            <p>Two disciplines. One shared standard: understand the problem, then build with care.</p>
          </div>

          <div className="careers-positions__grid">
            {openRoles.map((role) => (
              <article key={role.title} className={`career-role career-role--${role.variant}`}>
                <header className="career-role__header">
                  <div className="career-role__index" aria-hidden="true">{role.index}</div>
                  <div className="career-role__identity">
                    <div className="career-role__icon"><role.icon aria-hidden="true" /></div>
                    <div>
                      <span>GuruCool internship</span>
                      <h3>{role.title}</h3>
                    </div>
                  </div>
                  <div className="career-role__tags" aria-label="Role details">
                    <span>{role.type}</span>
                    <span>{role.location}</span>
                    <span className="career-role__open"><i aria-hidden="true" />Open</span>
                  </div>
                </header>

                <div className="career-role__body">
                  <div className="career-role__overview">
                    <p>{role.description}</p>
                    <div className="career-role__supporting">{role.supporting}</div>
                  </div>

                  <div className="career-role__requirements">
                    <h4>What helps you succeed</h4>
                    <ul>
                      {role.requirements.map((req) => (
                        <li key={req}>
                          <Check aria-hidden="true" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="career-role__footer">
                  <p>Ready to learn through real work?</p>
                  <Button asChild className="career-role__apply">
                    <a href={APPLY_FORM_LINK} target="_blank" rel="noopener noreferrer">
                      Apply Now
                      <ExternalLink aria-hidden="true" />
                    </a>
                  </Button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
