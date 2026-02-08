import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const studentOptions = ["Less than 300", "300 - 800", "800 - 1500", "More than 1500"];
const priorityOptions = ["Attendance", "Fees", "Exams/Reports", "Parent Communication", "Full ERP", "Other"];

export default function BookDemoPage() {
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
I'd like to book a demo.

Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
School: ${formData.school}
City: ${formData.city}
Students: ${formData.students}
Priority: ${formData.priority}
Notes: ${formData.notes || "None"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917058905200?text=${encodedMessage}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const isValid = formData.name && formData.phone && formData.school && formData.city;

  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Book a Demo | GuruCool School Management System"
        description="Book a personalized demo of GuruCool for your school. See QR attendance, WhatsApp alerts, and admin dashboards in action."
        canonical="/book-demo"
      />
      <PageHeader
        title="Book a Demo"
        subtitle="See how GuruCool can transform your school's operations. Takes about 30 seconds."
      />

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
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
                    <Label htmlFor="notes">Specific needs or questions (optional)</Label>
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
                    Book Demo Now
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

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-foreground rounded-2xl p-8 text-primary-foreground h-full">
                <h3 className="text-heading-lg font-bold mb-6">Contact Us Directly</h3>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-body-sm text-primary-foreground/70">Call or WhatsApp</p>
                    <div className="space-y-2">
                      <a
                        href="tel:+917058905200"
                        className="flex items-center gap-3 text-body-md hover:text-guru-blue transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        +91 70589 05200
                      </a>
                      <a
                        href="tel:+918692072767"
                        className="flex items-center gap-3 text-body-md hover:text-guru-blue transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        +91 86920 72767
                      </a>
                      <a
                        href="tel:+919322815434"
                        className="flex items-center gap-3 text-body-md hover:text-guru-blue transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        +91 93228 15434
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-body-sm text-primary-foreground/70">Email</p>
                    <a
                      href="mailto:edu.gurucool@gmail.com"
                      className="flex items-center gap-3 text-body-md hover:text-guru-blue transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      edu.gurucool@gmail.com
                    </a>
                  </div>

                  <div className="space-y-3">
                    <p className="text-body-sm text-primary-foreground/70">Location</p>
                    <div className="flex items-start gap-3 text-body-md">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      Thane, Maharashtra, India
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary-foreground/10">
                  <p className="text-body-sm text-primary-foreground/70 mb-4">Prefer to chat directly?</p>
                  <Button asChild className="w-full gap-2 bg-whatsapp hover:bg-whatsapp-hover">
                    <a
                      href="https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20plans%20for%20our%20school."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Open WhatsApp
                    </a>
                  </Button>
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
