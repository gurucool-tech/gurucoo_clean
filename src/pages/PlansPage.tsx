import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, MessageCircle, ArrowRight, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20understand%20your%20plans%20and%20pricing.";

const plans = [
  {
    name: "Safety Core",
    tagline: "School runs properly from Day 1",
    description: "Essential features for schools starting their digital journey",
    forWhom: "Small to medium schools, schools new to ERP",
    sections: [
      {
        title: "Attendance & Identity",
        features: [
          "QR + Face Attendance (students & teachers)",
          "QR ID cards",
          "Camera / scanner support",
          "Attendance audit logs",
        ],
      },
      {
        title: "Academics",
        features: [
          "Syllabus coverage tracking",
          "Homework & classwork",
          "Results & assessments",
          "Marks entry",
          "Basic report cards",
        ],
      },
      {
        title: "Parents & Communication",
        features: [
          "WhatsApp alerts: Attendance only",
          "Remarks & complaints (simple)",
        ],
      },
      {
        title: "Administration",
        features: [
          "Unified calendar (Attendance, Exams, Holidays)",
          "Basic fee status (paid / unpaid)",
          "Dashboards: Student / Teacher / Admin",
          "User metrics (Total users, Active users)",
        ],
      },
    ],
    highlighted: false,
  },
  {
    name: "Academic Suite",
    tagline: "School runs smoothly, admin effort reduces",
    description: "Advanced features for schools ready to streamline operations",
    forWhom: "Medium to large schools, schools with established processes",
    includesLine: "Includes everything in Safety Core, plus:",
    sections: [
      {
        title: "Academics & Exams",
        features: [
          "Exam management (Seating arrangement, Hall tickets, Exam attendance)",
          "Timetable generator",
          "Teacher allotment",
          "Basic feedback (Text remarks, Non-gamified)",
        ],
      },
      {
        title: "Parents & Communication",
        features: [
          "WhatsApp notifications: Results",
          "Other academic notifications",
        ],
      },
      {
        title: "Administration",
        features: [
          "Fee receipts",
          "Fee reminders",
          "Leave management",
          "Student document storage",
        ],
      },
      {
        title: "Payroll (Assistance Only)",
        features: [
          "Salary calculation using attendance",
          "Monthly payable days",
          "Excel export",
          "No PF / ESI / TDS compliance",
        ],
      },
    ],
    highlighted: true,
  },
  {
    name: "Flagship Plan",
    tagline: "School runs intelligently with automation",
    description: "Full automation for schools ready to scale",
    forWhom: "Large schools, school groups, institutions seeking full automation",
    includesLine: "Includes everything in Academic Suite, plus:",
    sections: [
      {
        title: "Feedback & Intelligence",
        features: [
          "Gamified feedback (Ratings, Stars, Student reputation)",
        ],
      },
      {
        title: "Payroll (Full System)",
        features: [
          "Salary slips",
          "PF / ESI / TDS/Tax",
          "Monthly & yearly summaries",
        ],
      },
      {
        title: "Analytics",
        features: [
          "Advanced attendance analytics",
          "Advanced user analytics",
        ],
      },
      {
        title: "Academics (Premium)",
        features: [
          "Question paper generation assistant",
        ],
      },
      {
        title: "Platform Extras",
        features: [
          "ReadCycle (Book sharing / exchange platform access)",
          "Multi-language support",
        ],
      },
    ],
    highlighted: false,
  },
];

const comparisonFeatures = [
  {
    category: "Attendance & Identity",
    features: [
      { name: "QR + Face Attendance", safety: true, academic: true, flagship: true },
      { name: "QR ID cards", safety: true, academic: true, flagship: true },
      { name: "Camera / scanner support", safety: true, academic: true, flagship: true },
      { name: "Attendance audit logs", safety: true, academic: true, flagship: true },
    ],
  },
  {
    category: "Academics",
    features: [
      { name: "Syllabus coverage tracking", safety: true, academic: true, flagship: true },
      { name: "Homework & classwork", safety: true, academic: true, flagship: true },
      { name: "Results & assessments", safety: true, academic: true, flagship: true },
      { name: "Marks entry", safety: true, academic: true, flagship: true },
      { name: "Basic report cards", safety: true, academic: true, flagship: true },
      { name: "Exam management (seating/hall tickets/exam attendance)", safety: false, academic: true, flagship: true },
      { name: "Timetable generator", safety: false, academic: true, flagship: true },
      { name: "Teacher allotment", safety: false, academic: true, flagship: true },
      { name: "Feedback (Basic text)", safety: false, academic: true, flagship: true },
      { name: "Gamified feedback (ratings/stars/reputation)", safety: false, academic: false, flagship: true },
      { name: "Question paper generation assistant", safety: false, academic: false, flagship: true },
    ],
  },
  {
    category: "Parents & Communication",
    features: [
      { name: "WhatsApp alerts: Attendance", safety: true, academic: true, flagship: true },
      { name: "WhatsApp notifications: Results", safety: false, academic: true, flagship: true },
      { name: "Other academic notifications", safety: false, academic: true, flagship: true },
      { name: "Remarks & complaints (simple)", safety: true, academic: true, flagship: true },
    ],
  },
  {
    category: "Administration",
    features: [
      { name: "Unified calendar", safety: true, academic: true, flagship: true },
      { name: "Basic fee status (paid/unpaid)", safety: true, academic: true, flagship: true },
      { name: "Fee receipts", safety: false, academic: true, flagship: true },
      { name: "Fee reminders", safety: false, academic: true, flagship: true },
      { name: "Leave management", safety: false, academic: true, flagship: true },
      { name: "Student document storage", safety: false, academic: true, flagship: true },
      { name: "Dashboards (Student/Teacher/Admin)", safety: true, academic: true, flagship: true },
      { name: "User metrics (total/active users)", safety: true, academic: true, flagship: true },
    ],
  },
  {
    category: "Payroll",
    features: [
      { name: "Payroll assistance (attendance-based salary + payable days + export)", safety: false, academic: true, flagship: true },
      { name: "Full payroll (salary slips + PF/ESI/TDS/Tax + summaries)", safety: false, academic: false, flagship: true },
    ],
  },
  {
    category: "Analytics",
    features: [
      { name: "Advanced attendance analytics", safety: false, academic: false, flagship: true },
      { name: "Advanced user analytics", safety: false, academic: false, flagship: true },
    ],
  },
  {
    category: "Platform Extras",
    features: [
      { name: "ReadCycle", safety: false, academic: false, flagship: true },
      { name: "Multi-language support", safety: false, academic: false, flagship: true },
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Plans | Safety Core, Academic Suite & Flagship | GuruCool"
        description="Choose the right plan for your school: Safety Core, Academic Suite, or Flagship. Start simple and upgrade as your needs grow."
        canonical="/plans"
      />
      <PageHeader
        title="Three Plans. One System."
        subtitle="Start with what you need today and scale as your school grows. All plans include training and support."
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Limited Time: No Setup Cost
          </div>
        }
      />

      {/* Plan Cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="plan-card"
              >
                {plan.highlighted && (
                  <div className="plan-card-badge">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-caption font-semibold whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-heading-xl font-bold text-foreground mt-1">{plan.name}</h3>
                  <p className="text-body-md text-primary font-medium mt-1">{plan.tagline}</p>
                  <p className="text-body-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-caption text-muted-foreground">Best for:</p>
                  <p className="text-body-sm text-foreground">{plan.forWhom}</p>
                </div>

                {plan.includesLine && (
                  <p className="text-body-sm text-primary font-medium mb-4">{plan.includesLine}</p>
                )}

                <div className="space-y-6 mb-8 flex-1">
                  {plan.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="text-caption font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-body-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 plan-card-btn"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">
                Feature Comparison
              </h2>
              <p className="text-body-md text-muted-foreground">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-premium">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left text-body-sm font-semibold text-foreground p-4 w-1/3">Feature</th>
                      <th className="text-center text-body-sm font-semibold text-foreground p-4">Safety Core</th>
                      <th className="text-center text-body-sm font-semibold text-foreground p-4">Academic Suite</th>
                      <th className="text-center text-body-sm font-semibold text-foreground p-4">Flagship Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category) => (
                      <>
                        <tr key={category.category} className="bg-muted/30">
                          <td colSpan={4} className="text-body-sm font-semibold text-foreground p-4">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="border-t border-border/30">
                            <td className="text-body-sm text-foreground p-4">{feature.name}</td>
                            <td className="text-center p-4">
                              {feature.safety ? (
                                <CheckCircle2 className="w-5 h-5 text-guru-green mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                              )}
                            </td>
                            <td className="text-center p-4">
                              {feature.academic ? (
                                <CheckCircle2 className="w-5 h-5 text-guru-green mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                              )}
                            </td>
                            <td className="text-center p-4">
                              {feature.flagship ? (
                                <CheckCircle2 className="w-5 h-5 text-guru-green mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
