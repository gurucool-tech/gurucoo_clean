import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20team.";

const team = [
  { role: "Founder & CEO", description: "Driving the vision of smart school management for Indian schools. Focused on product-market fit and sustainable growth." },
  { role: "Head of Product", description: "Building features that solve real problems for schools. Responsible for roadmap and user experience." },
  { role: "Engineering Lead", description: "Ensuring reliability, security, and performance at scale. Leading the technical architecture." },
  { role: "School Success Lead", description: "Helping schools get the most out of GuruCool. Managing implementations and training." },
  { role: "Sales & Partnerships", description: "Building relationships with schools and partners. Understanding market needs." },
  { role: "Customer Support", description: "First point of contact for schools. Resolving issues quickly and effectively." },
];

import { Briefcase } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Leadership | GuruCool"
        description="Meet the team building GuruCool for Indian schools—focused on practical outcomes and strong implementation."
        canonical="/team"
      />
      <PageHeader
        variant="editorial"
        title="Our Team"
        subtitle="A passionate team dedicated to improving school operations across India"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Team" },
        ]}
      />

      {/* Team */}
      <section className="team-stage section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="team-stage__grid">
              {team.map((member, index) => (
                <div key={member.role} className={`team-role ${index === 0 ? "team-role--lead" : ""}`}>
                  <div className="team-role__icon">
                    <Users className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-heading-md font-bold text-foreground mb-2">{member.role}</h3>
                  <p className="text-body-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>

            <div className="team-stage__note">
              <p className="text-body-md text-muted-foreground">
                We're a small but focused team. Every member wears multiple hats and is committed to school success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
