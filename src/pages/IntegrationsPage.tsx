import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Video, CreditCard, MapPin, Fingerprint, Bell, CheckCircle2, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20about%20integrations.";

const integrations = [
  { icon: Video, category: "Video Classes", title: "Online Learning Platforms", description: "Connect GuruCool with your video conferencing tools.", capabilities: ["Zoom integration", "Google Meet support", "Class scheduling sync", "Attendance tracking for online sessions"], useCases: "Schools conducting hybrid classes can track attendance from within GuruCool." },
  { icon: CreditCard, category: "Payments", title: "Payment Gateways", description: "Enable online fee payments through trusted payment providers.", capabilities: ["Razorpay integration", "PayU support", "Payment status sync", "Receipt generation"], useCases: "Parents can pay fees online through your school's fee portal." },
  { icon: MapPin, category: "Transport", title: "GPS & Transport Tracking", description: "Connect with GPS tracking providers for school bus monitoring.", capabilities: ["Live bus tracking", "Route optimization", "Pick-up/drop-off alerts", "Driver management"], useCases: "Schools with transport can give parents real-time visibility." },
  { icon: Fingerprint, category: "Attendance", title: "Biometric Devices", description: "Integrate with biometric hardware for attendance.", capabilities: ["Fingerprint devices", "Face recognition terminals", "RFID readers", "Data sync with GuruCool"], useCases: "Schools with existing hardware can sync data to GuruCool." },
  { icon: Bell, category: "Communication", title: "Messaging Services", description: "Connect with SMS and notification services.", capabilities: ["SMS gateway integration", "Email services", "Push notifications", "Fallback messaging"], useCases: "SMS for parents without WhatsApp or for urgent communications." },
];

export default function IntegrationsPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Integrations | GuruCool for Indian Schools"
        description="Connect GuruCool with your school workflow. Reliable attendance devices, exports, and operational integrations for Indian schools."
        canonical="/integrations"
      />
      <PageHeader 
        title="Integrations" 
        subtitle="Connect GuruCool with your existing tools and services. Extend functionality without replacing what already works." 
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product", href: "/product" }, { label: "Integrations" }]} 
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

      {/* Integrations List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-bold text-foreground mb-4">Integration Categories</h2>
            </div>
            <div className="space-y-8">
              {integrations.map((integration) => (
                <div key={integration.title} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <integration.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-caption text-primary font-medium">{integration.category}</span>
                          <h3 className="text-heading-lg font-bold text-foreground">{integration.title}</h3>
                        </div>
                      </div>
                      <p className="text-body-md text-muted-foreground mb-4">{integration.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {integration.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2 text-body-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="text-body-sm font-semibold text-foreground mb-2">Typical Use Case</h4>
                      <p className="text-body-sm text-muted-foreground">{integration.useCases}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-display-sm font-bold text-foreground mb-4">API Access</h2>
                <p className="text-body-lg text-muted-foreground mb-6">
                  For schools with development teams, we provide API access to build custom connections.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-body-md text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    RESTful API with comprehensive documentation
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    Webhook support for real-time events
                  </li>
                  <li className="flex items-start gap-3 text-body-md text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-guru-green flex-shrink-0 mt-0.5" />
                    Secure OAuth authentication
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-premium">
                <div className="bg-foreground rounded-lg p-4 font-mono text-sm text-primary-foreground overflow-x-auto">
                  <pre>{`GET /api/v1/students
Authorization: Bearer <token>

{
  "data": [
    {
      "id": "std_123",
      "name": "Rahul Sharma",
      "class": "8A"
    }
  ]
}`}</pre>
                </div>
                <p className="text-caption text-muted-foreground mt-4">API access available for Flagship Plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
