import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, ArrowRight, BookOpen, FileText, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20access%20your%20guides.";

const guides = [
  {
    id: 1,
    title: "School Attendance Best Practices Guide",
    description: "A comprehensive guide to implementing accurate attendance systems in Indian schools.",
    type: "PDF Guide",
    pages: "12 pages",
  },
  {
    id: 2,
    title: "Parent Communication Playbook",
    description: "Strategies for effective school-parent communication that actually works.",
    type: "PDF Guide",
    pages: "8 pages",
  },
  {
    id: 3,
    title: "School Digitization Checklist",
    description: "Step-by-step checklist for schools planning to implement management software.",
    type: "Checklist",
    pages: "4 pages",
  },
];

export default function GuidesPage() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    city: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Team GuruCool,
I'd like to access your guides and resources.

Name: ${formData.name}
School: ${formData.school}
City: ${formData.city}
Email: ${formData.email}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917058905200?text=${encodedMessage}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const isValid = formData.name && formData.school && formData.city && formData.email;

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Free Guides & Resources | GuruCool"
        description="Practical resources to help Indian schools improve attendance, parent communication, and operations. Free guides and checklists."
        canonical="/guides"
      />
      <PageHeader
        title="Free Guides & Resources"
        subtitle="Practical resources to help schools improve their operations. Fill the form below to get access."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides & Resources" },
        ]}
      />

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Guides List */}
              <div>
                <h2 className="text-heading-xl font-bold text-foreground mb-6">
                  Available Resources
                </h2>
                <div className="space-y-4">
                  {guides.map((guide) => (
                    <div key={guide.id} className="bg-card rounded-xl border border-border/50 p-6 hover:shadow-premium transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {guide.type === "Checklist" ? (
                            <FileText className="w-6 h-6 text-primary" />
                          ) : (
                            <BookOpen className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-heading-md font-bold text-foreground mb-1">{guide.title}</h3>
                          <p className="text-body-sm text-muted-foreground mb-2">{guide.description}</p>
                          <div className="flex items-center gap-3 text-caption text-muted-foreground">
                            <span>{guide.type}</span>
                            <span>•</span>
                            <span>{guide.pages}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div>
                <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium sticky top-24">
                  <h2 className="text-heading-xl font-bold text-foreground mb-2">
                    Get Free Access
                  </h2>
                  <p className="text-body-md text-muted-foreground mb-6">
                    Fill the form and we'll share the resources on WhatsApp or email.
                  </p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school">School Name *</Label>
                        <Input
                          id="school"
                          value={formData.school}
                          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          placeholder="Your school's name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="City, State"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={!isValid}
                        className="w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Get Access via WhatsApp
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-guru-green mx-auto mb-4" />
                      <h3 className="text-heading-lg font-bold text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-body-md text-muted-foreground">
                        We'll share the resources on WhatsApp or email shortly.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
