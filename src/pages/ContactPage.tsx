import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const FORM_URL = "https://forms.gle/XR7p3yEcvzdZzZms9";

const studentOptions = ["Less than 300", "300 - 800", "800 - 1500", "More than 1500"];
const priorityOptions = ["Attendance", "Fees", "Exams/Reports", "Parent Communication", "Full ERP", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    school: "",
    city: "",
    students: "",
    priority: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Team GuruCool,
I'd like to get in touch.

Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
School: ${formData.school}
City: ${formData.city}
Students: ${formData.students}
Priority: ${formData.priority}
Message: ${formData.notes || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917058905200?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const isValid = formData.name && formData.phone && formData.school && formData.city;

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Contact GuruCool | Book a Demo for Your School"
        description="Book a demo or contact GuruCool for plan details. WhatsApp-first communication, quick onboarding, and reliable implementation."
        canonical="/contact"
      />
      <PageHeader
        title="Contact Us"
        subtitle="Ready to transform your school's operations? We'd love to hear from you."
      />

      {/* Contact Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-heading-xl font-bold text-foreground mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-body-sm text-muted-foreground mb-2">Call or WhatsApp</h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+917058905200"
                        className="flex items-center gap-3 text-body-md text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        +91 70589 05200
                      </a>
                      <a
                        href="tel:+918692072767"
                        className="flex items-center gap-3 text-body-md text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        +91 86920 72767
                      </a>
                      <a
                        href="tel:+919322815434"
                        className="flex items-center gap-3 text-body-md text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        +91 93228 15434
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-body-sm text-muted-foreground mb-2">Email</h3>
                    <a
                      href="mailto:edu.gurucool@gmail.com"
                      className="flex items-center gap-3 text-body-md text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      edu.gurucool@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-body-sm text-muted-foreground mb-2">Location</h3>
                    <div className="flex items-start gap-3 text-body-md text-foreground">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      Thane, Maharashtra, India
                    </div>
                  </div>

                  <div>
                    <h3 className="text-body-sm text-muted-foreground mb-2">Response Time</h3>
                    <div className="flex items-center gap-3 text-body-md text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      Usually within 2 hours
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover">
                    <a
                      href="https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20get%20in%20touch."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Open WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Partner/Careers Form CTA */}
                <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border/50">
                  <h3 className="text-heading-md font-bold text-foreground mb-2">Want to partner with us or apply?</h3>
                  <p className="text-body-sm text-muted-foreground mb-4">Use our form and we'll respond shortly.</p>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm font-medium text-primary hover:underline"
                  >
                    Open Form <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                  <h2 className="text-heading-xl font-bold text-foreground mb-2">Book a Demo or Ask a Question</h2>
                  <p className="text-body-md text-muted-foreground mb-8">
                    Fill out the form below and we'll reach out via WhatsApp
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="students">Number of Students</Label>
                        <Select
                          value={formData.students}
                          onValueChange={(value) => setFormData({ ...formData, students: value })}
                        >
                          <SelectTrigger id="students" className="bg-background">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            {studentOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority Area</Label>
                        <Select
                          value={formData.priority}
                          onValueChange={(value) => setFormData({ ...formData, priority: value })}
                        >
                          <SelectTrigger id="priority" className="bg-background">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            {priorityOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Message (optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us more about what you're looking for..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isValid}
                      className="w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>

                    {submitted && (
                      <div className="flex items-center gap-2 text-guru-green text-body-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        Opening WhatsApp with your details...
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
